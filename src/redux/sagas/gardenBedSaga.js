import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* getGardenBed() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get("/api/garden", config);
    yield put({ type: "SET_GARDENS", payload: response.data });

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
  } catch (error) {
    console.log("GET GARDEN CLIENT FAIL", error);
  }
}

function* createGardenBed(action) {
  try {
    console.log("ACTION PAYLOAD FROM CREATEGARDEN", action.payload);
    yield axios.post(`/api/garden/create-garden`, action.payload);
    yield put({ type: "GET_GARDEN_BEDS" });
  } catch (error) {
    console.log("ERROR IN GARDEN BED CLIENT POST", error);
  }
}

function* getThisGardenBed(action) {
  console.log(action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/garden/${action.payload}`);
    console.log(response);
    yield put({ type: "SET_CURRENT_GARDEN_BED", payload: response.data });
  } catch (error) {
    console.log("GARDEN BED ID CLIENT GET ERROR", error);
  }
}

function* deleteGardenBed(action) {
  try {
    yield axios.delete(`api/garden/${action.payload}`);
    yield put({ type: "GET_GARDEN_BEDS" });
  } catch (error) {
    console.log("ERROR DELETE GET", deleteGardenBed);
  }
}

function* updateSeeds(action) {
  console.log(action.payload);

  console.log(action.payload.garden_bed_id);
  try {
    yield axios.put(
      `api/garden/${action.payload.garden_bed_id}`,
      action.payload
    );
    let thisGardenBed = action.payload.garden_bed_id;
    console.log(action.payload.garden_bed_id);
    yield put({ type: "GET_THIS_GARDEN_BED", payload: thisGardenBed });
    console.log(action.payload);
    // yield put({ type: "SET_UPDATED_GARDEN_BED", payload: action.payload });
    // yield put({ type: "SET_CURRENT_SEEDS", payload: action.payload });
  } catch (error) {
    console.log("CLIENT UPDATE ERR", error);
  }
}

function* resetDBSeeds(action) {
  console.log(action.payload);
  try {
    let response = { payload: action.payload };
    console.log(response);
    yield axios.put(`api/garden/reset/${action.payload}`, response);
    yield put({ type: "GET_THIS_GARDEN_BED", payload: action.payload });
  } catch (error) {
    console.log("CLIENT RESET ERR", error);
  }
}

function* userSaga() {
  yield takeLatest("CREATE_GARDEN_BED", createGardenBed);
  yield takeLatest("GET_GARDEN_BEDS", getGardenBed);
  yield takeLatest("GET_THIS_GARDEN_BED", getThisGardenBed);
  yield takeLatest("DELETE_USER_GARDEN", deleteGardenBed);
  yield takeLatest("UPDATE_SEEDS", updateSeeds);
  yield takeLatest("RESET_DB_SEEDS", resetDBSeeds);
}

export default userSaga;

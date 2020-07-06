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

function* userSaga() {
  yield takeLatest("CREATE_GARDEN_BED", createGardenBed);
  yield takeLatest("GET_GARDEN_BEDS", getGardenBed);
  yield takeLatest("GET_THIS_GARDEN_BED", getThisGardenBed);
}

export default userSaga;

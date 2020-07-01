import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* materialSaga() {
  yield takeLatest("GET_MATERIALS", fetchMaterials);
  yield takeLatest("POST_MATERIALS", postMaterials);
}

function* fetchMaterials() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get(`/api/materials`);
    yield put({ type: "SET_MATERIALS", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* postMaterials(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    yield axios.post(`/api/materials`, action.payload);
    yield put({ type: "SET_MATERIALS" });
  } catch (error) {
    console.log("Post err", error);
  }
}

export default materialSaga;

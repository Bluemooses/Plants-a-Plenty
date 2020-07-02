import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* vegButtonCountSaga() {
  yield takeLatest("POST_VEGGIE_COUNTS", postVeggieCount);
}

function* postVeggieCount(action) {
  console.log(action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    console.log(action.payload);
    yield axios.post(`/api/seeds`, action.payload, config);
    // yield put({ type: "GET_MATERIALS" });
  } catch (error) {
    console.log("Post err", error);
  }
}

export default vegButtonCountSaga;

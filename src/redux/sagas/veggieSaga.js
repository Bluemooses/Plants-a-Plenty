import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchVeggies() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/veggies`, config);
    yield put({ type: "SET_VEGGIES", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* veggieSaga() {
  yield takeLatest("GET_VEGGIES", fetchVeggies);
}

export default veggieSaga;

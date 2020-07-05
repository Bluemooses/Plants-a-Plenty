import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* materialSaga() {
  yield takeLatest("GET_MATERIALS", getMaterials);
  yield takeLatest("CREATE_GARDEN_BED", postMaterials);
}

function* getMaterials() {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get(`/api/materials/`);
    yield put({ type: "SET_MATERIALS", payload: response.data });
    console.log(response.data.ID);
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* postMaterials(action) {
  console.log(action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post(`/api/materials`, action.payload, config);
    yield put({ type: "SET_MATERIALS", payload: action.payload });
  } catch (error) {
    console.log("Post err", error);
  }
}

export default materialSaga;

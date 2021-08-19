import {watchFetchNewsDataSaga} from "./containers/NewsAppContainer/sagas";
import {all} from "redux-saga/effects";

function* sagas() {
    yield all([watchFetchNewsDataSaga()])
}
export default sagas;
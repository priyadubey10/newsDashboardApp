import * as constants from "./constants";
import * as actions from "./actions";
import {put, call, takeLatest} from "redux-saga/effects";
import axios from "axios";

export function* fetchNewsDataSaga(){
    try{
        const response = yield call(axios,"https://newsapi.org/v2/everything?q=%22unitedkingdom%22&apiKey=4812cc5a247249ecaf62d21984427929")
        yield put(actions.fetchNewsDataSuccess(response.data))
    }catch(error){
        yield put(actions.fetchNewsDataFailure(error))
    }
}

export function* watchFetchNewsDataSaga(){
    yield takeLatest(constants.FETCH_NEWS_DATA_REQUEST, fetchNewsDataSaga)
}

import { takeLatest, put } from 'redux-saga/effects';
import * as constants from "../constants";
import {fetchNewsDataSaga, watchFetchNewsDataSaga} from "../sagas";
import {fetchNewsDataSuccess} from "../actions";

describe('fetchNewsDataSaga Saga', () => {
    let getDataGenerator;
    beforeEach(() => {
      getDataGenerator = fetchNewsDataSaga();
    });
  
    it('should dispatch the fetchNewsDataSuccess action by setting the data successfully', () => {
      const response = {
        data: 'result',
      };
      getDataGenerator.next()
      const putDescriptor = getDataGenerator.next(response).value;
      expect(putDescriptor).toEqual(put(fetchNewsDataSuccess(response.data)));
    });

    describe('watchFetchNewsDataSaga Saga', () => {
        const watcherFetchNewsDataSaga = watchFetchNewsDataSaga();
      
        it('should start task to watch for fetchNewsDataSaga', () => {
          const takeLatestDescriptor = watcherFetchNewsDataSaga.next().value;
          expect(takeLatestDescriptor).toEqual(takeLatest(constants.FETCH_NEWS_DATA_REQUEST, fetchNewsDataSaga ));
        });
      });
  });
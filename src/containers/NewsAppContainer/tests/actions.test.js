import * as constants from "../constants";
import {fetchNewsDataSuccess, fetchNewsDataRequest, fetchNewsDataFailure} from "../actions";

describe('NewsApp Actions', () => {
    describe('fetchNewsDataRequest', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: constants.FETCH_NEWS_DATA_REQUEST,
            };
            expect(fetchNewsDataRequest()).toEqual(expectedResult);
        });
        });

    describe('fetchNewsDataSuccess', () => {
        it('should return the correct type', () => {
            const response = { Data: 'newsData', Error: 'error' };           
            const expectedResult = {
              type: constants.FETCH_NEWS_DATA_SUCCESS,
              response
            };
          expect(fetchNewsDataSuccess(response)).toEqual(expectedResult);
        });
      });

      describe('fetchNewsDataFailure', () => {
        it('should return the correct type', () => {
            const error = { error: 'some error' };            
            const expectedResult = {
              type: constants.FETCH_NEWS_DATA_FAILURE,
              error
            };
          expect(fetchNewsDataFailure(error)).toEqual(expectedResult);
        });
      });
});

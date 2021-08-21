import {fetchNewsDataSuccess, fetchNewsDataRequest, fetchNewsDataFailure} from "../actions";
import {fetchNewsReducer, initialState} from "../reducers";

describe('FlightBooking reducer', () => {
    it('returns the initial state', () => {
        expect(fetchNewsReducer(undefined, {})).toEqual(initialState);
    });

    it('gets the fetchNewsDataRequest', () => {
        expect(fetchNewsReducer(initialState, fetchNewsDataRequest())).toEqual(
            {
                ...initialState.newsData,
                fetchingNewsData: true,
                newsDataFetched : false,
                responseNewsData: []
            }
        );
      });

      it('gets the fetchNewsDataSuccess', () => {
        let response = {
            articles: [{
                data : "newsDetail",
            }]
        }
        expect(fetchNewsReducer(initialState, fetchNewsDataSuccess(response))).toEqual(
            {
                ...initialState.newsData,
                fetchingNewsData: false,
                newsDataFetched : true,
                responseNewsData: response.articles
            }
        );
      });

      it('gets the fetchNewsDataFailure', () => {
          let error = "someError"
        expect(fetchNewsReducer(initialState, fetchNewsDataFailure(error))).toEqual(
            {
                ...initialState.newsData,
                fetchingNewsData: false,
                newsDataFetched : false,
                responseNewsData: error
            }
        );
      });
});
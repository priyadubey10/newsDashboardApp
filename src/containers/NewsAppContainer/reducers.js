import * as constants from "./constants";

export const initialState = {
    newsData: {
        fetchingNewsData: false,
        newsDataFetched: false,
        responseNewsData: []
    }
}

export const fetchNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.FETCH_NEWS_DATA_REQUEST :
            return {
                ...state.newsData,
                fetchingNewsData: true,
                newsDataFetched : false,
                responseNewsData: []
            }
        case constants.FETCH_NEWS_DATA_SUCCESS :
            return {
                ...state.newsData,
                fetchingNewsData: false,
                newsDataFetched : true,
                responseNewsData: action.response.articles,
            }
        case constants.FETCH_NEWS_DATA_FAILURE :
            return {
                ...state.newsData,
                fetchingNewsData: false,
                newsDataFetched : false,
                responseNewsData: action.error,
            }
        default:
            return state
    }
    
}
import * as constants from "./constants";

export const fetchNewsDataRequest = () => {
    return {
        type: constants.FETCH_NEWS_DATA_REQUEST,
    }
}

export const fetchNewsDataSuccess = (response) => {
    return {
        type: constants.FETCH_NEWS_DATA_SUCCESS,
        response
    }
}

export const fetchNewsDataFailure = (error) => {
    return {
        type: constants.FETCH_NEWS_DATA_FAILURE,
        error
    }
}
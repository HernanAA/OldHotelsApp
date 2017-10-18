import {
  HOTELS_FETCH,
  HOTELS_FETCH_SUCCESS,
  HOTELS_FETCH_FAIL,
  HOTELS_FILTER_CHANGED,
  HOTEL_DETAIL_FETCH,
  HOTEL_DETAIL_FETCH_SUCCESS,
  HOTEL_DETAIL_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  error: '',
  fetching: false,

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOTELS_FETCH:
      return { ...state, fetching: true };
    case HOTELS_FETCH_SUCCESS:
      return { ...state, ...action.payload, fetching: false };
    case HOTELS_FETCH_FAIL:
      return { ...state, ...action.payload, fetching: false };
    default:
      return state;
  }
};

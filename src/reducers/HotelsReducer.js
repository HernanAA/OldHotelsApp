import {
  HOTEL_LIST_FETCH,
  HOTEL_LIST_FETCH_SUCCESS,
  HOTEL_LIST_FETCH_FAIL,
  HOTELS_FILTER_CHANGED,
  HOTEL_FETCH,
  HOTEL_FETCH_SUCCESS,
  HOTEL_FETCH_FAIL,
  HOTEL_SELECT
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  error: '',
  listFetching: false,
  hotelFetch: false,
  selectedHotel: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOTEL_LIST_FETCH:
      return { ...state, listFetching: true };
    case HOTEL_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, listFetching: false };
    case HOTEL_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, listFetching: false };
    case HOTEL_FETCH:
      return { ...state, hotelFetch: true };
    case HOTEL_FETCH_SUCCESS:
      return { ...state, ...action.payload, hotelFetch: false };
    case HOTEL_FETCH_FAIL:
      return { ...state, ...action.payload, hotelFetch: false };
    case HOTEL_SELECT:
    return { ...state, ...action.payload };
    default:
      return state;
  }
};

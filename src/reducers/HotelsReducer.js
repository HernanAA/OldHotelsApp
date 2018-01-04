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
import * as ReduxPersistConstants from 'redux-persist/constants';

const INITIAL_STATE = {
  list: [],
  filterdList: [],
  error: '',
  listFetching: false,
  hotelFetching: false,
  selectedHotel: {},
  filterText:'',
};

function persistedStateIsInvalid(state) {
  return Object.keys(state).length === 0;
}

export default (state = INITIAL_STATE, action) => {
  if (action === ReduxPersistConstants.REHYDRATE) {
    if (persistedStateIsInvalid(action.payload)) {
      console.log('her- state')
      return {...state};
    } else {
      console.log('her- persistedState:', action.playload)
      return {...action.payload};
    }
  }
  switch (action.type) {
    case HOTEL_LIST_FETCH:
      return { ...state, listFetching: true };
    case HOTEL_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, filterdList: action.payload.list, listFetching: false };
    case HOTEL_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, listFetching: false };
    case HOTEL_FETCH:
      return { ...state, hotelFetching: true };
    case HOTEL_FETCH_SUCCESS:
      return { ...state, ...action.payload, hotelFetching: false };
    case HOTEL_FETCH_FAIL:
      return { ...state, ...action.payload, hotelFetching: false };
    case HOTEL_SELECT:
      return { ...state, ...action.payload };
    case HOTELS_FILTER_CHANGED:
      return { ...state, ...action.payload, listFetching: false };
    default:
      return state;
  }
};

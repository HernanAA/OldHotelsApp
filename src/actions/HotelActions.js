import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'

import {
    HOTEL_LIST_FETCH,
    HOTEL_LIST_FETCH_SUCCESS,
    HOTEL_LIST_FETCH_FAIL,
    HOTELS_FILTER_CHANGED,
    HOTEL_FETCH,
    HOTEL_FETCH_SUCCESS,
    HOTEL_FETCH_FAIL,
    HOTEL_SELECT
} from './types';

export const hotelListFetch = () => {

    return (dispatch) => {

        dispatch({ type: HOTEL_LIST_FETCH });

        var url = api.getHotelListlUrl();
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                //alert(JSON.stringify(response))
                return response.json()
            })
            .then((rjson) => {
                //alert(JSON.stringify(rjson,null,4))
                if (rjson !== null) {
                    dispatch({ type: HOTEL_LIST_FETCH_SUCCESS, payload: { list: rjson.hotels } });
                }
                else {
                    console.log('not found any hotel.');
                }
            })
            .catch((error) => {
                console.error(error)
                dispatch({ type: HOTEL_LIST_FETCH_FAIL, payload: { error: 'Ha ocurrido un error al cargar los hoteles.' } })
            })
    }
};

export const hotelFetch = (id) => {
    return (dispatch, getState) => {

        dispatch({ type: HOTEL_FETCH });

        var url = api.getHotelListlUrl() + id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                //alert(JSON.stringify(response))
                return response.json()
            })
            .then((rjson) => {
                //alert(JSON.stringify(rjson,null,4))
                if (rjson !== null) {
                    dispatch({ type: HOTEL_FETCH_SUCCESS, payload: { selectedHotel: rjson.hotel } });
                }
                else {
                    console.log('not found any hotel.');
                }
            })
            .catch((error) => {
                console.error(error)
                dispatch({ type: HOTEL_FETCH_FAIL, payload: { error: 'Ha ocurrido un error al cargar los hoteles.' } })
            })
    }
};

export const filterChanged = ({ text }) => {

    return (dispatch, getState) => {
        dispatch({ type: HOTEL_LIST_FETCH });

        const newData = getState().hotels.list.filter((item) => {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({ type: HOTELS_FILTER_CHANGED, payload: { filterText: text, filterdList: newData } });
    }
}

export const hotelSelect = ( selectedHotel ) => {
    return({ 
        type: HOTEL_SELECT, 
        payload: {selectedHotel} 
    });
}
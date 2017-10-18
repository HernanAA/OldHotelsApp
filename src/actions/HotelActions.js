import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'

import {
    HOTELS_FETCH,
    HOTELS_FETCH_SUCCESS,
    HOTELS_FETCH_FAIL,
    HOTELS_FILTER_CHANGED,
    HOTEL_DETAIL_FETCH,
    HOTEL_DETAIL_FETCH_SUCCESS,
    HOTEL_DETAIL_FETCH_FAIL
} from './types';

export const hotelsFetch = () => {

    return (dispatch) => {
        
        dispatch({ type: HOTELS_FETCH });

        var url = api.getHoteslUrl();
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => { 
            //alert(JSON.stringify(response))
            return response.json() })
        .then((rjson) => {
            //alert(JSON.stringify(rjson,null,4))
            if (rjson !== null) {
                dispatch({ type: HOTELS_FETCH_SUCCESS, payload: {list: rjson.hotels} });
            }
            else {
                console.log('not found any hotel.');
            }
        })
        .catch((error) => {
            console.error(error)
            dispatch({ type: HOTELS_FETCH_FAIL, playload: {error: 'Ha ocurrido un error al cargar los hoteles.'}})
        })
    }
};

export const filterChanged = ({ text }) => {

    return (dispatch, getState) => {
        dispatch({ type: LOADING });

        const newData = getState().prods.hotels.filter(function(item){
            const itemData = item.Imagen.substring(20, 40).toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({ type: FILTER_CHANGED, payload: {filter: text, filteredHotels: newData} });
    }
}

// export const productSave = ({ name, phone, shift, uid }) => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/hotels/${uid}`)
//             .set({ name, phone, shift })
//             .then(() => {
//                 dispatch({ type: PRODUCT_SAVE_SUCCESS });
//                 Actions.productList({ type: 'reset' });
//             });
//     };
// };

// export const productDelete = ({ uid }) => {
//     const { currentUser } = firebase.auth();

//     return () => {
//         firebase.database().ref(`/users/${currentUser.uid}/hotels/${uid}`)
//             .remove()
//             .then(() => {
//                 Actions.productList({ type: 'reset' });
//             });
//     };
// };

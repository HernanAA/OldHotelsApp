import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger'
import { AsyncStorage, StatusBar, View, Platform } from 'react-native';
import Router from './Router';
import {persistStore, autoRehydrate} from 'redux-persist'

//const store = createStore(reducers, {}, applyMiddleware(thunk, logger));

//a dirty way to clear persisted old state
//Todo: if you've ran the old TodoRN version, uncomment this before get started.
//(async () => await AsyncStorage.clear())();

const INITIAL_STATE = {
    hotels: {
      list: [],
      filterdList: [],
      error: '',
      listFetching: true,
      hotelFetching: false,
      selectedHotel: {},
      filterText: '',
    }
  };
const store  = createStore(
    reducers,
    INITIAL_STATE,
    compose(
      applyMiddleware(
        thunk,
        logger
      ),
      autoRehydrate()
    )
  );
  
  persistStore(store , { storage: AsyncStorage });

Number.prototype.thousandDot = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
 };

const Style = {
    flex: 1, 
    marginTop: Platform.OS === 'ios' ? 20 : 0 
}

const App = () => (
    <Provider store={store}>
        <View style={Style}>
            <StatusBar backgroundColor={'black'} />
            <Router />
        </View>
    </Provider>
)

export default App
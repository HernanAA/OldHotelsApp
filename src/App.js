import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger'
import { StatusBar, View, Platform } from 'react-native';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

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
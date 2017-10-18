import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import AlmundoApp from './AlmundoApp';
import logger from 'redux-logger'
import { StatusBar, View } from 'react-native';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

Number.prototype.thousandDot = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
 };

const App = () => (
    <Provider store={store}>
        <View style={{flex: 1}}>
            <StatusBar backgroundColor={'black'} />
            <AlmundoApp />
        </View>
    </Provider>
)

export default App
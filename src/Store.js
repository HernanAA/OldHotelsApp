import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const INITIAL_STATE = {
  hotels: {
    list: [],
    filterdList: [],
    error: '',
    listFetching: false,
    hotelFetching: false,
    selectedHotel: {},
    filterText: '',
  }
};

var middlewares = compose(applyMiddleware(thunk), autoRehydrate());

export default function configureStore() {
  const store = createStore(reducers, INITIAL_STATE, middlewares);
  persistStore(store, {storage: AsyncStorage}, ()=> {alert('persist Complete')});
  return store;
}

// const middleWare = [
//   thunk//, 
//   //createLogger()
// ];

// const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore);

// export default configureStore = (onComplete) => {
//   const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
//   persistStore(store, { storage: AsyncStorage }, onComplete);

//   return store;
// };

// const configureStore = createStore(
//   reducers, {}, applyMiddleware(thunk, createLogger)
// );


// const configureStore = createStore(
//   reducers,
//   INITIAL_STATE,
//   compose(
//     applyMiddleware(
//       thunk,
//       createLogger
//     ),
//     autoRehydrate()
//   )
// );

// persistStore(configureStore, { storage: AsyncStorage });

// export default configureStore;

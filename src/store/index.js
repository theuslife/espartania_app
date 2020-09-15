import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers/mainReducer'
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(mainReducer);

export default store
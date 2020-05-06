import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import viewport from '../middlewares/viewport';

const enhancer = applyMiddleware(viewport);

const store = createStore(reducer, {}, enhancer);

export default store

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() - compose later
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import viewport from '../middlewares/viewport';
import server from '../middlewares/server';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(viewport, server)
);

const store = createStore(reducer, {}, enhancer);

export default store

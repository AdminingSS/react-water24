import {combineReducers} from 'redux';
//import {routerReducer} from 'react-router-redux';
import screen from './screen';
import accordions from './accordions';
import viewport from './viewport';
import user from './user';
import news from './news';
import system from './system';

export default combineReducers({
    screen, viewport, accordions, user, news, system
});
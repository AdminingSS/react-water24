import {
    SWITCH_SCREEN,
    RESIZE_VIEWPORT,
    AUTHENTICATE_USER,
    CHANGE_BALANCE,
    CHANGE_SUBSCRIPTION,
    UPDATE_BALANCE_HISTORY,
    SET_LOADER, SET_MESSAGE
} from '../constants';
//import {push, replace} from 'react-router-redux';

export function changeScreen(screenName) {
    return {
        type: SWITCH_SCREEN,
        payload: {screenName}
    }
}

export function resizeViewport(newWidth) {
    return {
        type: RESIZE_VIEWPORT,
        payload: {newWidth}
    }
}

export function authenticateUser(user, password) {
    return {
        type: AUTHENTICATE_USER,
        payload: {user, password}
    }
}

export function changeBalance(sum) {
    return {
        type: CHANGE_BALANCE,
        payload: {sum}
    }
}

export function changeSubscription(sum) {
    return {
        type: CHANGE_SUBSCRIPTION,
        payload: {sum}
    }
}

export function updateBalanceHistory(obj) {
    return {
        type: UPDATE_BALANCE_HISTORY,
        payload: {obj}
    }
}

export function setLoader(shown) {
    return {
        type: SET_LOADER,
        payload: {shown}
    }
}

export function setMessage(active, data = null) {
    return {
        type: SET_MESSAGE,
        payload: {active, data}
    }
}


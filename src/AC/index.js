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

export function resizeViewport() {
    return {
        type: RESIZE_VIEWPORT
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

export function updateBalanceHistory(historyItem) {
    return {
        type: UPDATE_BALANCE_HISTORY,
        payload: {historyItem}
    }
}

export function setLoader(shown) {
    return {
        type: SET_LOADER,
        payload: {shown}
    }
}

export function setMessage(active, sum = null) {
    return {
        type: SET_MESSAGE,
        payload: {active, sum}
    }
}


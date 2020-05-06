import {SET_LOADER, SET_MESSAGE} from "../constants";

export default store => next => action => {
    if(action.type === SET_LOADER || SET_MESSAGE) {
        const eventTime = (action.type === SET_LOADER) ? 3000 : 5000;
        const eventAction = (action.type === SET_LOADER) ? {
                type: SET_LOADER,
                payload: {shown: false}
            }
            :
            {
                type: SET_MESSAGE,
                payload: {active: null, sum: null}
            };

        setTimeout(function () {
            store.dispatch(eventAction)
        }, eventTime)
    }
    next(action);
}
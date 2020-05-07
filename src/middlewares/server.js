import {SET_LOADER, SET_MESSAGE} from "../constants";
import {setLoader, setMessage} from "../AC";

let loaderTimeout;
let messageTimeout;

export default store => next => action => {
    const {type, payload} = action;

    switch(type) {
        case SET_LOADER:
            if(payload.shown) {
                clearTimeout(loaderTimeout);
                loaderTimeout = setTimeout(() => {
                    store.dispatch(setLoader(false))
                }, 3000);
            }
            break;

        case SET_MESSAGE:
            if(payload.active) {
                clearTimeout(messageTimeout);
                messageTimeout = setTimeout(() => {
                    store.dispatch(setMessage(null))
                }, 5000);
            }
            break;
    }

    next(action);
}
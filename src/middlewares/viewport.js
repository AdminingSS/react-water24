import {RESIZE_VIEWPORT} from "../constants";

export default store => next => action => {
    if(!(action.type === RESIZE_VIEWPORT)) return next(action);
    next({
        ...action,
        newWidth: document.documentElement.clientWidth
    })
}
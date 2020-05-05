import {SET_LOADER, SET_MESSAGE} from '../constants';

const systemDefaultState = {
    loaderShown: false,
    messageActive: null,
    messageData: null
};

export default (system = systemDefaultState, action) => {
    const {type, payload} = action;
    switch(type) {
        case SET_LOADER : return {...system, loaderShown: payload.shown};
        case SET_MESSAGE: return {...system, messageActive: payload.active, messageData: payload.data}
    }
    return system
}
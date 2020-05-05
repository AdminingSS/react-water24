import {SWITCH_SCREEN} from '../constants';

export default (screen = 'auth', action) => {
    const {type, payload} = action;
    switch(type) {
        case SWITCH_SCREEN : return payload.screenName
    }
    return screen
}
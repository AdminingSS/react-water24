import {RESIZE_VIEWPORT} from '../constants';

const viewportDefaultState = {
    width: window.innerWidth
};

export default ( viewport =  viewportDefaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case RESIZE_VIEWPORT:
            return {...viewport, width: payload.newWidth}
    }

    return viewport
}
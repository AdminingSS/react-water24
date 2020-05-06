import {RESIZE_VIEWPORT} from '../constants';

const viewportDefaultState = {
    width: window.innerWidth
};

export default ( viewport =  viewportDefaultState, action) => {
    const {type, payload, newWidth} = action;

    switch (type) {
        case RESIZE_VIEWPORT:
            return {...viewport, width: newWidth}
    }

    return viewport
}
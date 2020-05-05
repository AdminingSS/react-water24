import authAccordion from '../authAccordion';
import infoAccordion from '../infoAccordion';

const accordionsDefaultState = {
    auth: authAccordion,
    info: infoAccordion
};

export default (accordions = accordionsDefaultState, action) => {
    const {type, payload} = action;

    return accordions
}
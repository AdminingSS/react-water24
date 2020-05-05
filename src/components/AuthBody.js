import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionDesktop from './AccordionDesktop';
import AccordionMobile from './AccordionMobile';
import {connect} from "react-redux";

class AuthBody extends Component {
    render() {
        return (
            <div className="uk-section">
                <div className="uk-container">
                    {this.getAccordion()}
                </div>
            </div>
        );
    }

    getAccordion() {
        const {content, viewportWidth} = this.props;

        if(viewportWidth > 767) {
            return <AccordionDesktop content = {content} />
        }

        return <AccordionMobile content = {content} />
    }
}

AuthBody.propTypes = {
    content: PropTypes.array.isRequired,
    viewportWidth: PropTypes.number.isRequired
};

export default connect((state) => ({
    content: state.accordions.auth,
    viewportWidth: state.viewport.width
}), null)(AuthBody);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionDesktop from './AccordionDesktop';
import AccordionMobile from './AccordionMobile';
import {connect} from "react-redux";

class InfoBody extends Component {
    render() {
        return (
            <div className="uk-section">
                <div className="uk-container">
                    <h3 className="uk-text-primary">Просмотрите интересующую вас информацию</h3>
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

InfoBody.propTypes = {
    content: PropTypes.array.isRequired,
    viewportWidth: PropTypes.number.isRequired
};

export default connect((state) => ({
    content: state.accordions.info,
    viewportWidth: state.viewport.width
}), null)(InfoBody);

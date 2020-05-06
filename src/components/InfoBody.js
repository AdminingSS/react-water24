import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionDesktop from './AccordionDesktop';
import AccordionMobile from './AccordionMobile';
import {connect} from "react-redux";
import {getAccordionContent, getDevice} from "../selectors";

class InfoBody extends Component {

    static propTypes = {
        content: PropTypes.array.isRequired,
        isDesktop: PropTypes.bool.isRequired
    };

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
        const {content, isDesktop} = this.props;

        return (isDesktop) ?
            <AccordionDesktop content={content}/>
            :
            <AccordionMobile content={content}/>
    }
}

const mapStateToProps = state => {
    return {
        content: getAccordionContent(state),
        isDesktop: getDevice(state)
    }
};

export default connect(mapStateToProps)(InfoBody);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getLoaderShown} from "../selectors";

class Loader extends Component {

    static propTypes = {
        loaderShown: PropTypes.bool.isRequired
    };

    render() {
        const {loaderShown} = this.props;

        if(!loaderShown) return null;

        return (
            <div className="tm-swapper-holder">
                <div className="tm-swapper">
                    <div className="tm-animated-logo-wrapper">
                        <div className="tm-animated-logo" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loaderShown: getLoaderShown(state)
    };
};

export default connect(mapStateToProps)(Loader);

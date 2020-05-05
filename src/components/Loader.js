import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Loader extends Component {
    render() {
        if(!this.props.loaderShown) return null;
        return (
            <div className="tm-swapper-holder">
                <div className="tm-swapper">
                    <div className="tm-animated-logo-wrapper">
                        <div className="tm-animated-logo"></div>
                    </div>
                </div>
            </div>
        );
    }
}

Loader.propTypes = {};

export default connect((state) => ({
    loaderShown: state.system.loaderShown
}), null)(Loader);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resizeViewport} from "../AC";

class ViewportController extends Component {

    render() {
        return null;
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        const {resizeViewport} = this.props;
        const newWidth = window.innerWidth;

        resizeViewport(newWidth);
    }
}

ViewportController.propTypes = {
    //from connect
    resizeViewport: PropTypes.func.isRequired
};

export default connect(null, { resizeViewport })(ViewportController);

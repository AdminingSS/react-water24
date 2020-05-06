import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {resizeViewport} from "../AC";

class ViewportController extends Component {

    static propTypes = {
        //from connect
        resizeViewport: PropTypes.func.isRequired
    };

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
        //const newWidth = window.innerWidth;

        resizeViewport();
    }
}

const mapDispatchToProps = dispatch => ({
    resizeViewport: () => dispatch(resizeViewport())
});

export default connect(null, mapDispatchToProps)(ViewportController);

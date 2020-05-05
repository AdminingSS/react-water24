import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from './ScreenHeader';
import {connect} from "react-redux";
import AuthBody from "./AuthBody";
import BalanceBody from "./BalanceBody";
import OffersBody from "./OffersBody";
import InfoBody from "./InfoBody";
import MapBody from "./MapBody";

class Screen extends Component {
    render() {
        return (
            <div className = {this.props.className}>
                <ScreenHeader />
                {this.getBody()}
            </div>
        );
    }

    getBody () {
        const {activeScreen} = this.props;
        switch (activeScreen) {
            case 'auth':
                return <AuthBody />;
            case 'balance':
                return <BalanceBody />;
            case 'offers':
                return <OffersBody />;
            case 'info':
                return <InfoBody />;
            case 'map':
                return <MapBody />
        }
    }
}

Screen.propTypes = {
    //from connect
    activeScreen: PropTypes.string.isRequired
};

export default connect((state) => ({
    activeScreen: state.screen
}), null)(Screen);

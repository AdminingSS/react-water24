import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScreenHeader from './ScreenHeader';
import {connect} from "react-redux";
import AuthBody from "./AuthBody";
import BalanceBody from "./BalanceBody";
import OffersBody from "./OffersBody";
import InfoBody from "./InfoBody";
import MapBody from "./MapBody";
import classNames from "classnames";
import {getScreen} from "../selectors";

class Screen extends Component {

    static propTypes = {
        //from connect
        activeScreen: PropTypes.string.isRequired
    };

    render() {
        const {activeScreen} = this.props;

        return (
            <div className = {classNames('tm-screen', [`tm-${activeScreen}`])}>
                <ScreenHeader activeScreen={activeScreen} />
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

const mapStateToProps = state => {
    return {
        activeScreen: getScreen(state)
    };
};

export default connect(mapStateToProps)(Screen);

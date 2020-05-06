import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import logoMain from '../assets/images/logo-main.svg';
import AuthController from "./LoginForm";

class ScreenHeader extends Component {
    render() {
        const {activeScreen} = this.props;

        if(activeScreen === 'auth') {
            return (
                <header className="uk-position-relative uk-background-primary">
                    <div>
                        <div className="uk-logo">
                            <img src={logoMain} alt="" />
                        </div>
                        <h2 className="tm-screen-name">Аква-счет</h2>
                        <AuthController />
                    </div>
                </header>
            )
        }

        return (
            <header className="uk-position-relative uk-background-primary">
                <nav data-uk-navbar>
                    <div className="uk-navbar-center">
                        <div className="uk-navbar-item uk-logo">
                            <img src={logoMain} alt="" />
                            <span className="tm-screen-name">Аква-счет</span>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

ScreenHeader.propTypes = {
    //from connect
    activeScreen: PropTypes.string.isRequired
};

export default connect((state) => ({
    activeScreen: state.screen
}), null)(ScreenHeader);

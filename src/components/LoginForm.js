import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {authenticateUser, changeScreen, setLoader} from '../AC';
import {isNumeric} from "../helpers";

class LoginForm extends Component {

    static propTypes = {
        //from connect
        authenticateUser: PropTypes.func.isRequired,
        changeScreen: PropTypes.func.isRequired,
        setLoader: PropTypes.func.isRequired
    };

    state = {
        login: '',
        password: ''
    };

    render() {
        const {password} = this.state;
        return (
            <div>
                <h3>Для пополнения аква-счета введите номер телефона:</h3>
                <input className="uk-input js-phone" type="text" placeholder="+7 (___) ___ - ____"
                       value={this.getLoginValue()} onChange={this.handleChange('login')}/>
                <input className="uk-input js-password" type="text" placeholder="Ваш пароль" value={password}
                       onChange={this.handleChange('password')}/>
                <button className="uk-button uk-button-primary js-auth" onClick={this.handleSubmit}>Войти</button>
            </div>
        );
    }

    getLoginValue = () => {
        const {login} = this.state;
        if(!login.length) return login;

        const firstPart = '+7 (' + login.slice(0,3);
        const secondPart = (login.length > 3) ? ') ' + login.slice(3,6) : '';
        const lastPart = (login.length > 6) ? ' - ' + login.slice(6) : '';

        const newLoginValue = firstPart + secondPart + lastPart;

        return newLoginValue;
    };

    handleChange = input => e => {
        const value = e.target.value;

        if (input === 'login') {

            const oldValue = this.state[input];
            let newValue;

            if(!oldValue) newValue = value.replace(/[-()\s]/g, '');
            else newValue = value.slice(2).replace(/[-()\s]/g, '');

            if (newValue.length > 10 || (!isNumeric(newValue) && newValue.length)) return;

            this.setState({login: newValue});

            return;
        }

        this.setState({password: value})
    };


    handleSubmit = () => {
        const {login, password} = this.state;
        const {authenticateUser, changeScreen, setLoader} = this.props;

        if (login.length < 10 || !(isNumeric(login))) return;
        if (password.length < 3) return;

        authenticateUser(login, password);
        changeScreen('balance');

        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    }
}

const mapDispatchToProps = dispatch => ({
    authenticateUser: (user, password) => dispatch(authenticateUser(user, password)),
    changeScreen: screenName => dispatch(changeScreen(screenName)),
    setLoader: (shown) => dispatch(setLoader(shown))
});

export default connect(null, mapDispatchToProps)(LoginForm);

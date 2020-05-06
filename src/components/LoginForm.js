import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {authenticateUser, changeScreen, setLoader} from '../AC';

class LoginForm extends Component {
    state = {
        login: '',
        password: ''
    };

    render() {
        return (
            <div>
                <h3>Для пополнения аква-счета введите номер телефона:</h3>
                <input className="uk-input js-phone" type="text" placeholder="+7 (___) ___ - ____"
                       value={this.getLoginValue()} onChange={this.handleChange('login')}/>
                <input className="uk-input js-password" type="text" placeholder="Ваш пароль" value={this.state.password}
                       onChange={this.handleChange('password')}/>
                <button className="uk-button uk-button-primary js-auth" onClick={this.handleSubmit}>Войти</button>
            </div>
        );
    }

    getLoginValue = () => {
        const value = this.state.login;
        if(!value.length) return value;

        const firstPart = '+7 (' + value.slice(0,3);
        const secondPart = (value.length > 3) ? ') ' + value.slice(3,6) : '';
        const lastPart = (value.length > 6) ? ' - ' + value.slice(6) : '';

        const newValue = firstPart + secondPart + lastPart;

        return newValue;
    };

    handleChange = input => e => {
        const value = e.target.value;

        if (input === 'login') {

            const oldValue = this.state[input];
            let newValue;

            if(!oldValue) newValue = value.replace(/[-()\s]/g, '');
            else newValue = value.slice(2).replace(/[-()\s]/g, '');

            if (newValue.length > 10 || (!newValue.match(/^\d+$/) && newValue.length)) return;

            this.setState({login: newValue});

            return;
        }

        this.setState({password: value})
    };


    handleSubmit = () => {
        const {login, password} = this.state;
        const {authenticateUser, changeScreen, setLoader} = this.props;

        if (login.length < 10 || !(login.match(/^\d+$/))) return;
        if (password.length < 3) return;

        authenticateUser(login, password);
        changeScreen('balance');

        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000)
    }
}

LoginForm.propTypes = {
    //from connect
    authenticateUser: PropTypes.func.isRequired,
    changeScreen: PropTypes.func.isRequired
};

export default connect(null, {authenticateUser, changeScreen, setLoader})(LoginForm);

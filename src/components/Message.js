import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Message extends Component {
    render() {
        const {messageActive, messageData} = this.props;
        if(!messageActive) return null;
        let message, messageClass;

        switch(messageActive) {
            case 1:
                message = 'Введеный номер телефона еще не зарегистрирован в системе.';
                messageClass = "tm-message error";
                break;
            case 2:
                message = <div>На ваш баланс зачислено <span>{messageData}</span> рублей.</div>;
                messageClass = "tm-message success";
                break;
            case 3:
                message = 'Введен некорректный телефонный номер или пароль';
                messageClass = "tm-message novalid";
                break;
            case 4:
                message = <div>Ваша подписка пополнена на <span>{messageData}</span> рублей.</div>;
                messageClass = "tm-message success";
                break;
            case 5:
                message = 'Ваша подписка отменена.';
                messageClass = "tm-message success";
                break;
        }

        return (
            <div className={messageClass}>
                <div>
                    {message}
                </div>
            </div>
        );
    }
}

Message.propTypes = {};

export default connect((state) => ({
    messageActive: state.system.messageActive,
    messageData: state.system.messageData
}), null)(Message);

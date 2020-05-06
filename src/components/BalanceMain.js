import React, {Component} from 'react';
import PropTypes from 'prop-types';
import iconBulb from '../assets/images/icon-bulb.svg';
import balanceDisplay from '../assets/images/balance-display.svg';
import {connect} from "react-redux";
import {changeBalance, changeSubscription, setMessage, updateBalanceHistory} from "../AC";
import classNames from 'classnames';
import HistoryList from "./HistoryList";
import {isNumeric} from "../helpers";
import {getUserBalance, getUserSubscription, getUserHistory} from "../selectors";

class BalanceMain extends Component {

    static propTypes = {
        changePage: PropTypes.func.isRequired,
        //from connect
        balance: PropTypes.number.isRequired,
        subscription: PropTypes.number.isRequired,
        history: PropTypes.array.isRequired,
        changeBalance: PropTypes.func.isRequired,
        changeSubscription: PropTypes.func.isRequired,
        updateBalanceHistory: PropTypes.func.isRequired,
        setMessage: PropTypes.func.isRequired
    };

    state = {
        tabActive: 1,
        balanceInput: '',
        subscriptionInput: ''
    };

    render() {
        const {changePage, balance} = this.props;
        const {tabActive} = this.state;

        return (
            <div className="tm-balance-main">

                <div className="tm-section-operator">
                    <div className="uk-container">
                        <div className="uk-text-center uk-margin-small-bottom">
                            Вас обслуживает оператор:<br/>
                            <b>ООО “Чистая вода”</b>
                        </div>
                        <div>
                            <button className="uk-button uk-button-default" onClick={changePage('operator')}>
                            <span className="uk-margin-small-right">
                                <img src={iconBulb} alt=""/>
                            </span>
                                Открыть профиль оператора
                            </button>
                        </div>
                    </div>
                </div>

                <div className="uk-section">
                    <div className="uk-container">
                        <div className="tm-balance-display">
                            <div className="uk-margin-right">
                                <img src={balanceDisplay} alt=""/>
                            </div>
                            <div>
                                <div className="tm-caption">Ваш баланс</div>
                                <div className="tm-cash">
                                    <span>{balance.toFixed(2)}</span> руб.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tm-section-tabs">
                    <div className="uk-container">
                        <div className={classNames('tm-tabs', {
                                'js-position-2': (tabActive === 2)
                            },
                            {
                                'js-position-3': (tabActive === 3)
                            })}>
                            <div className={classNames('tm-tab', {'uk-active': (tabActive === 1)})}
                                 onClick={this.handleTabChange(1)}>Пополнение
                            </div>
                            <div className={classNames('tm-tab', {'uk-active': (tabActive === 2)})}
                                 onClick={this.handleTabChange(2)}>Подписка
                            </div>
                            <div className={classNames('tm-tab', 'tm-sheet', {'uk-active': (tabActive === 3)})}
                                 onClick={this.handleTabChange(3)}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.2143 5.50001H17.2857V0.785729C17.2857 0.351776 16.9339 0 16.5 0H0.785729C0.351776 0 0 0.351776 0 0.785729V18.8571C0 20.5929 1.4071 22 3.14287 22H18.8571C20.5929 22 22 20.5929 22 18.8571V6.28569C22 5.85179 21.6482 5.50001 21.2143 5.50001ZM6.28569 3.92855H11C11.4339 3.92855 11.7857 4.28033 11.7857 4.71428C11.7857 5.14824 11.4339 5.50001 11 5.50001H6.28569C5.85174 5.50001 5.49997 5.14824 5.49997 4.71428C5.49997 4.28033 5.85179 3.92855 6.28569 3.92855ZM13.3571 18.8571H3.92855C3.4946 18.8571 3.14282 18.5054 3.14282 18.0714C3.14282 17.6374 3.4946 17.2857 3.92855 17.2857H13.3571C13.7911 17.2857 14.1428 17.6374 14.1428 18.0714C14.1428 18.5054 13.7911 18.8571 13.3571 18.8571ZM13.3571 15.7143H3.92855C3.4946 15.7143 3.14282 15.3625 3.14282 14.9285C3.14282 14.4946 3.4946 14.1428 3.92855 14.1428H13.3571C13.7911 14.1428 14.1428 14.4946 14.1428 14.9285C14.1428 15.3625 13.7911 15.7143 13.3571 15.7143ZM13.3571 12.5714H3.92855C3.4946 12.5714 3.14282 12.2197 3.14282 11.7857C3.14282 11.3518 3.4946 11 3.92855 11H13.3571C13.7911 11 14.1428 11.3518 14.1428 11.7857C14.1428 12.2197 13.7911 12.5714 13.3571 12.5714ZM13.3571 9.42857H3.92855C3.4946 9.42857 3.14282 9.07679 3.14282 8.64284C3.14282 8.20888 3.4946 7.85711 3.92855 7.85711H13.3571C13.7911 7.85711 14.1428 8.20888 14.1428 8.64284C14.1428 9.07679 13.7911 9.42857 13.3571 9.42857ZM20.4285 18.8571C20.4285 19.725 19.725 20.4285 18.8571 20.4285C17.9893 20.4285 17.2857 19.725 17.2857 18.8571V7.07142H20.4286V18.8571H20.4285Z"
                                        fill="#0066AE"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {this.getTab()}

            </div>
        );
    }

    handleTabChange = tab => e => {
        this.setState({tabActive: tab})
    };

    getTab() {
        const {tabActive, balanceInput, subscriptionInput} = this.state;
        const {subscription} = this.props;

        switch (tabActive) {
            case 1:
                return (
                    <div className="js-tab uk-active uk-section uk-background-primary">
                        <div className="uk-container">

                            <div className="tm-balance-control">
                                <h2>Пополнить баланс</h2>
                                <h3>Чтобы пополнить баланс аква-счета, выберите сумму или введите свое значение</h3>
                                <div className="tm-balance-buttons uk-child-width-1-2 uk-grid-small" data-uk-grid>
                                    <div>
                                        <a href="#" onClick={this.handleBalanceButton('50')}>
                                            <span>50</span> руб.
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" onClick={this.handleBalanceButton('100')}>
                                            <span>100</span> руб.
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" onClick={this.handleBalanceButton('500')}>
                                            <span>500</span> руб.
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" onClick={this.handleBalanceButton('1000')}>
                                            <span>1000</span> руб.
                                        </a>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <input className="uk-input" type="text" placeholder="Введите вашу сумму" value={balanceInput} onChange={this.handleBalanceInput}/>
                                    </div>
                                </div>
                                <button className="uk-button uk-button-primary js-balance-add" onClick={this.handleBalanceSubmit}>Пополнить баланс</button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="js-tab uk-active uk-section uk-background-primary">
                        <div className="uk-container">
                            <div className="tm-subscription-control">
                                <h2>Ваша подписка</h2>
                                <h3>Текущая подписка</h3>
                                <div className="tm-subscription-monitor">
                                    <span>{subscription}</span> руб. в месяц
                                </div>
                                <h3>Введите сумму, которая ежемесячно 1-го числа будет зачисляться на ваш баланс</h3>
                                <div className="tm-subscription-buttons uk-child-width-1-2 uk-grid-small" data-uk-grid>
                                    <div className="uk-width-1-1">
                                        <input className="uk-input" type="text" placeholder="Сумма подписки" value={subscriptionInput} onChange={this.handleSubscriptionInput}/>
                                    </div>
                                </div>
                                <button className="uk-button uk-button-primary js-subscription-add" onClick={this.handleSubscriptionSubmit()}>Обновить подписку
                                </button>
                                <a className="tm-subscription-cancel" href="#" onClick={this.handleSubscriptionSubmit('cancel')}>Отменить текущую подписку</a>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="js-tab uk-active tm-section-last-operations uk-section">
                        <div className="uk-container">
                            <HistoryList />
                        </div>
                    </div>
                )
        }
    };

    handleBalanceButton = input => e => {
        e.preventDefault();

        this.setState({balanceInput: input})
    };

    handleBalanceInput = e => {
        const value = e.target.value;

        if(!isNumeric(value) && value.length) return;

        this.setState({balanceInput: value})
    };

    handleBalanceSubmit = () => {
        const {history, changeBalance, updateBalanceHistory, setMessage} = this.props;
        const {balanceInput} = this.state;
        if(!balanceInput.length) return;
        const balanceSum = parseFloat(balanceInput);
        const newId = history[0].id + 1;

        changeBalance(balanceSum);

        updateBalanceHistory({
            id: newId,
            sum: balanceSum,
            date: new Date().toLocaleDateString(),
            automate: 11271,
            bonus: 0,
            liters: (balanceSum/4).toFixed(2),
            ware: 'Нет'
        });

        this.setState({balanceInput: ''});

        setMessage(2, balanceSum);

    };

    handleSubscriptionInput = e => {
        const value = e.target.value;

        if(!isNumeric(value) && value.length) return;

        this.setState({subscriptionInput: value})
    };

    handleSubscriptionSubmit = (op = '') => e => {
        e.preventDefault();

        const {changeSubscription, setMessage} = this.props;
        const {subscriptionInput} = this.state;
        if(!subscriptionInput.length && !op.length) return;
        if(op.length) {
            this.setState({subscriptionInput: ''})
        }
        const subscriptionSum = (op.length) ? 0 : parseFloat(subscriptionInput);
        const messageActive = (op.length) ? 5 : 4;
        const messageData = (op.length) ? null : subscriptionSum;

        changeSubscription(subscriptionSum);

        this.setState({subscriptionInput: ''});

        setMessage(messageActive, messageData);
    };
}

const mapStateToProps = state => {
    return {
        balance: getUserBalance(state),
        subscription: getUserSubscription(state),
        history: getUserHistory(state)
    };
};

const mapDispatchToProps = dispatch => ({
    changeBalance: sum => dispatch(changeBalance(sum)),
    changeSubscription: sum => dispatch(changeSubscription(sum)),
    updateBalanceHistory: historyItem => dispatch(updateBalanceHistory(historyItem)),
    setMessage: (active, sum) => dispatch(setMessage(active, sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceMain);


import {AUTHENTICATE_USER, CHANGE_BALANCE, CHANGE_SUBSCRIPTION, UPDATE_BALANCE_HISTORY} from '../constants';

const userDefaultState = {
    login: null,
    status: null,
    balance: null,
    subscription: null,
    history: []
};

export default ( user =  userDefaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case AUTHENTICATE_USER:
            return {...user, login: payload.user, status: 'logged', balance: 100, subscription: 200, history: [
                    {
                        id: 2,
                        sum: 100,
                        date: '15.03.2020',
                        automate: 11271,
                        bonus: 11.5,
                        liters: 5,
                        ware: 'Нет'
                    },
                    {
                        id: 1,
                        sum: -100,
                        date: '15.03.2020',
                        automate: 11271,
                        bonus: 11.5,
                        liters: 5,
                        ware: 'Нет'
                    }
                ]};
        case CHANGE_BALANCE:
            return {...user, balance: user.balance + payload.sum};
        case CHANGE_SUBSCRIPTION:
            return {...user, subscription: payload.sum};
        case UPDATE_BALANCE_HISTORY:
            return {...user, history: [].concat(payload.historyItem,user.history)}
    }

    return user
}
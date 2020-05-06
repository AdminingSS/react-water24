import React, {Component} from 'react';
import BalanceMain from "./BalanceMain";
import BalanceOperator from "./BalanceOperator";

class BalanceBody extends Component {

    state = {
        activePage: 'balance'
    };

    render() {
        const {activePage} = this.state;

        return (activePage === 'operator') ?
            <BalanceOperator changePage = {this.changePage} />
            :
            <BalanceMain changePage = {this.changePage} />
    }

    changePage = page => e => {
        this.setState({activePage: page})
    }
}

export default BalanceBody;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BalanceMain from "./BalanceMain";
import BalanceOperator from "./BalanceOperator";

class BalanceBody extends Component {

    state = {
        activePage: 'balance'
    };

    render() {

        if(this.state.activePage === 'operator') return <BalanceOperator changePage = {this.changePage} />;

        return <BalanceMain changePage = {this.changePage} />;

    }

    changePage = page => e => {
        this.setState({activePage: page})
    }
}

BalanceBody.propTypes = {};

export default BalanceBody;

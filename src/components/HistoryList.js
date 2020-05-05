import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import HistoryItem from './HistoryItem';

class HistoryList extends Component {

    state = {
        itemsToShow: (this.props.history.length >= 5) ? 5 : this.props.history.length
    };

    render() {
        const {history} = this.props;
        const {itemsToShow} = this.state;

        const historyItems = history.map((item) => <HistoryItem key={item.id} item={item}/>);

        return (
            <div className="tm-last-operations">
                <h2>Последние операции</h2>
                <div className="uk-margin-bottom js-operations-accordion" data-uk-accordion>
                    {historyItems.slice(0, itemsToShow)}
                </div>
                <button className="uk-button uk-button-primary js-operations-more"
                        onClick={this.handleShowMore}>Загрузить ещё
                </button>
            </div>

        );
    };

    handleShowMore = () => {
        const {history} = this.props;
        const {itemsToShow} = this.state;
        if(itemsToShow + 5 > history.length) this.setState({itemsToShow: history.length});
        else this.setState({itemsToShow: itemsToShow + 5});
    }
}

HistoryList.propTypes = {};

export default connect((state) => ({
    history: state.user.history
}), null)(HistoryList);

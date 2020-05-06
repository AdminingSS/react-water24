import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HistoryItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    };

    render() {
        const {item} = this.props;
        const itemClassName = (item.sum < 0) ? 'tm-negative' : 'tm-positive';
        const sign = (item.sum < 0) ? '' : '+';
        return (
            <div className={"tm-accordion-item " + itemClassName + " uk-open"}>
                <a className="uk-accordion-title" href="#"><span>{sign + item.sum}</span> руб.</a>
                <div className="uk-accordion-content uk-flex uk-child-width-1-2">
                    <div className="uk-margin-right">
                        <div className="uk-margin-small-bottom">Дата: <span>{item.date}</span>
                        </div>
                        <div className="uk-margin-small-bottom">Автомат: <span>{item.automate}</span>
                        </div>
                        <div>Бонус: <span>{item.bonus} руб.</span></div>
                    </div>
                    <div>
                        <div className="uk-margin-small-bottom">Литры: <span>{item.liters} л</span></div>
                        <div>Товар: <span>{item.ware}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoryItem;

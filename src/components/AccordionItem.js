import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AccordionItem extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        isOpen: PropTypes.bool
    };

    static defaultProps = {
        isOpen: false
    };

    render() {
        const {title, items, isOpen} = this.props;
        const className = (isOpen) ? 'uk-open' : '';

        return (
            <div className={"tm-accordion-item " + className}>
                <a className="uk-accordion-title" href="#">{title}</a>
                <div className="uk-accordion-content">
                    <ol>
                        {items.map(item => <li key={item}>{item}</li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default AccordionItem;

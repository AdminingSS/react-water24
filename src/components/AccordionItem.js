import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AccordionItem extends Component {
    render() {
        const {title, items, className} = this.props;

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

AccordionItem.propTypes = {};

export default AccordionItem;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from "./AccordionItem";

class AccordionMobile extends Component {

    static propTypes = {
        content: PropTypes.array.isRequired
    };

    render() {
        const {content} = this.props;
        return (
            <div className="tm-accordion-mobile">
                <div data-uk-accordion>
                    {content.map((accordItem, index) => <AccordionItem isOpen={index === 0} key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>)}
                </div>
            </div>
        );
    }
}

export default AccordionMobile;

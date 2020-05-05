import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from "./AccordionItem";

class AccordionMobile extends Component {
    render() {
        const {content} = this.props;
        return (
            <div className="tm-accordion-mobile">
                <div data-uk-accordion>
                    {content.map((accordItem, index) => {
                        if(!index) return <AccordionItem className='uk-open' key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>
                        return <AccordionItem key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>
                    })
                    }
                </div>
            </div>
        );
    }
}

AccordionMobile.propTypes = {
    content: PropTypes.array.isRequired
};

export default AccordionMobile;

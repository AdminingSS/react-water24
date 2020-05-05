import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from "./AccordionItem";

class AccordionDesktop extends Component {
    render() {
        const {content} = this.props;
        const evenContent = [], oddContent = [];

        content.map((item, index) => {
            if(index % 2 === 0) {
                evenContent.push(item)
            }
            else {
                oddContent.push(item)
            }
        });


        return (
            <div className="tm-accordion-desktop" data-uk-accordion="targets: .tm-accordion-item">
                <div>
                    {evenContent.map((accordItem, index) => {
                        if(!index) return <AccordionItem className='uk-open' key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>
                        return <AccordionItem key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>
                    })}
                </div>
                <div>
                    {oddContent.map(accordItem => <AccordionItem key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>)}
                </div>
            </div>
        );
    }
}

AccordionDesktop.propTypes = {
    content: PropTypes.array.isRequired
};

export default AccordionDesktop;

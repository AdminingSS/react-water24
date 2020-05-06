import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from "./AccordionItem";

class AccordionDesktop extends Component {

    static propTypes = {
        content: PropTypes.array.isRequired
    };

    render() {
        const {content} = this.props;
        const oddContent = content.filter((item, index) => index % 2 !== 0);
        const evenContent = content.filter((item, index) => index % 2 === 0);

        return (
            <div className="tm-accordion-desktop" data-uk-accordion="targets: .tm-accordion-item">
                <div>
                    {evenContent.map((accordItem, index) => <AccordionItem isOpen={index === 0} key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>)}
                </div>
                <div>
                    {oddContent.map(accordItem => <AccordionItem key={accordItem.id} title={accordItem.caption} items={accordItem.items}/>)}
                </div>
            </div>
        );
    }
}

export default AccordionDesktop;

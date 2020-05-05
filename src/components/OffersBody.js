import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalOffers from './ModalOffers';
import imageOffers1 from '../assets/images/offers-1.png';
import imageOffers2 from '../assets/images/offers-2.png';
import imageOffers3 from '../assets/images/offers-3.png';
import imageOffers4 from '../assets/images/offers-4.png';

class OffersBody extends Component {

    state = {
        modalOpen: null
    };

    render() {
        return (
            <div className="uk-section">
                <div className="uk-container">
                    <h3 className="uk-text-primary">Что означают вывески на автоматах?</h3>
                    <div className="uk-child-width-1-2" data-uk-grid>
                        <div>
                            <div className="tm-card">
                                <a href="#" onClick={this.handleClick(1)}>
                                    <img src={imageOffers1} alt="" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="tm-card">
                                <a href="#" onClick={this.handleClick(2)}>
                                    <img src={imageOffers2} alt="" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="tm-card">
                                <a href="#" onClick={this.handleClick(3)}>
                                    <img src={imageOffers3} alt="" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="tm-card">
                                <a href="#" onClick={this.handleClick(4)}>
                                    <img src={imageOffers4} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalOffers number={this.state.modalOpen} closeModal={this.closeModal} />
            </div>
        );
    }

    handleClick = number => e => {
        this.setState({modalOpen: number})
    };

    closeModal = () => {
        this.setState({modalOpen: null})
    }
}

OffersBody.propTypes = {};

export default OffersBody;

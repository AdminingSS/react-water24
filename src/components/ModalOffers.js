import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalOffers extends Component {

    static propTypes = {
        number: PropTypes.number,
        closeModal: PropTypes.func.isRequired
    };

    render() {
        const {number, closeModal} = this.props;
        if (!number) return null;

        return (
            <div className="tm-modal-offers" onClick={this.handleCloseAttempt}>
                <div className="tm-modal">
                    <div className="tm-modal-close" onClick={closeModal} />
                    <div className="tm-modal-content">
                        <h2>{this.getCaption()}</h2>
                        <p>{this.getText()}</p>
                        <div className="tm-phone">
                            8-800-111-22-33
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    getCaption = () => {
        const {number} = this.props;

        switch(number) {
            case 1:
                return 'АКЦИЯ ДЛЯ МНОГОДЕТНЫХ СЕМЕЙ';
            case 2:
                return 'АКЦИЯ ДЛЯ ВЕТЕРАНОВ';
            case 3:
                return 'АКЦИЯ ДЛЯ ПЕНСИОНЕРОВ';
            case 4:
                return 'Акция береги природу';
        }
    };

    getText = () => {
        const {number} = this.props;

        switch(number) {
            case 1:
                return 'В автоматах “Источник Здоровья” действует акция для многодетных семей - до 30 литров воды в месяц абсолютно бесплатно. Для участия в данной акции обратитесь по номеру телефона, указанному ниже.';
            case 2:
                return 'В автоматах “Источник Здоровья” действует акция для многодетных семей - до 30 литров воды в месяц абсолютно бесплатно. Для участия в данной акции обратитесь по номеру телефона, указанному ниже.';
            case 3:
                return 'В автоматах “Источник Здоровья” действует акция для многодетных семей - до 30 литров воды в месяц абсолютно бесплатно. Для участия в данной акции обратитесь по номеру телефона, указанному ниже.';
            case 4:
                return 'В автоматах “Источник Здоровья” действует акция для многодетных семей - до 30 литров воды в месяц абсолютно бесплатно. Для участия в данной акции обратитесь по номеру телефона, указанному ниже.';
        }
    };

    handleCloseAttempt = e => {
        if(e.target !== e.currentTarget) return;
        const {closeModal} = this.props;
        closeModal();
    }
}

export default ModalOffers;

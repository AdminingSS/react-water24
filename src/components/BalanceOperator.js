import React, {Component} from 'react';
import PropTypes from 'prop-types';
import arrowBack from '../assets/images/arrow-back.svg';
import logoInner from '../assets/images/logo_inner.png';
import classNames from "classnames";
import ModalNews from "./ModalNews";
import NewsList from './NewsList';

class BalanceOperator extends Component {

    static propTypes = {
        changePage: PropTypes.func.isRequired
    };

    state = {
        tabActive: 1,
        modalOpen: null,
        newsShown: 3
    };

    render() {
        const {changePage} = this.props;
        const {tabActive, modalOpen} = this.state;

        return (
            <div>
                <div className="tm-operator-profile">

                    <div className="tm-section-small uk-background-muted">
                        <div className="uk-container">
                            <div className="uk-position-relative">
                                <div className="tm-profile-heading">Профиль оператора</div>
                                <a className="tm-button-back" href="#" onClick={changePage('balance')}>
                                    <img src={arrowBack} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="tm-section-small">
                        <div className="uk-container">
                            <div className="uk-flex uk-flex-middle">
                                <div>
                                    <div className="tm-logo-inner">
                                        <img src={logoInner} alt=""/>
                                    </div>
                                </div>
                                <div className="tm-logo-text">
                                    ООО “Чистая вода”
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tm-section-tabs">
                        <div className="uk-container">
                            <div className={classNames('tm-tabs', 'tm-two-tabs', 'uk-text-center', {
                                'js-position-2': (tabActive === 2)
                            })}>
                                <div className={classNames('tm-tab', {'uk-active': (tabActive === 1)})}
                                     onClick={this.handleTabChange(1)}>Информация
                                </div>
                                <div className={classNames('tm-tab', {'uk-active': (tabActive === 2)})}
                                     onClick={this.handleTabChange(2)}>Поток
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.getTab()}

                    <ModalNews id={modalOpen} closeModal={this.closeModal} />

                </div>
            </div>
        );
    }

    handleTabChange = tab => e => {
        this.setState({tabActive: tab})
    };

    getTab() {
        const {tabActive, newsShown} = this.state;

        switch (tabActive) {
            case 1:
                return (
                    <div className="js-tab uk-active uk-margin-bottom">
                        <div className="uk-container">
                            <div>
                                <h2 className="tm-tab-heading">Информация об операторе</h2>
                                <div className="uk-margin-small-bottom">Наша компания “Чистая вода” занимается
                                    снабжением жилых
                                    комплексов, торговых и производственных предприятий чистой питьевой водой через наши
                                    автоматы.
                                </div>
                                <div className="uk-margin-small-bottom"><span className="tm-emphasis">Сайт: </span><a
                                    href="https://shop.ru" target="_blank">https://shop.ru</a></div>
                                <div className="uk-margin-bottom"><span
                                    className="tm-emphasis">Стоимость 1 литра воды: </span><span>4 руб.</span></div>
                                <div data-uk-accordion>
                                    <div className="tm-accordion-item uk-open">
                                        <a className="uk-accordion-title" href="#">Контакты и реквизиты</a>
                                        <div className="uk-accordion-content">
                                            <div className="tm-contacts-block">
                                                <div><span>Фактический адрес:</span></div>
                                                <div className="uk-margin-bottom">111219, Москва, 2-й Рощинский проезд,
                                                    дом 2,
                                                    строение 12.
                                                </div>
                                                <div><span>Электронная почта: </span>shop@shop.ru</div>
                                                <div className="uk-margin-bottom"><span>Телефон: </span>8-800-500-9876
                                                </div>
                                                <div className="uk-margin-small-bottom"><span>Реквизиты:</span></div>
                                                <div>ИП Иванов Иван Иванович</div>
                                                <div className="uk-margin-bottom">ИНН 7778644521 / ОГРНИП
                                                    1076564644123
                                                </div>
                                                <div><span>Юридический адрес:</span></div>
                                                <div>111219, Москва, 2-й Рощинский проезд, дом 2, строение 12.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tm-accordion-item">
                                        <a className="uk-accordion-title" href="#">Документы</a>
                                        <div className="uk-accordion-content">
                                            <a className="tm-button-document uk-button" href="#">
                                                Документация на воду
                                            </a>
                                            <a className="tm-button-document uk-button" href="#">
                                                Декларация соответствия
                                            </a>
                                            <a className="tm-button-document uk-button" href="#">
                                                Сертификат соответствия
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tm-accordion-item">
                                        <a className="uk-accordion-title tm-title-long" href="#">Пользовательское
                                            соглашение и
                                            политика
                                            конфиденциальности</a>
                                        <div className="uk-accordion-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut
                                            blanditiis consequuntur dicta dignissimos ea enim est et ex exercitationem
                                            fugiat illo laborum nemo nulla, obcaecati porro rem! Aperiam, cumque?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="js-tab uk-active uk-margin-bottom">
                        <div className="uk-container">
                            <h2 className="tm-tab-heading">Новостной поток</h2>
                            <div/>
                        </div>
                        <div className="uk-container uk-background-muted">
                            <NewsList type = "pinned" handleClick = {this.handleClick} />
                        </div>
                        <div className="uk-container">
                            <NewsList type = "all" show = {newsShown} handleClick = {this.handleClick} />
                        </div>
                        <div className="uk-container uk-text-center">
                            <button className="uk-button uk-button-primary uk-margin-bottom js-news-more" onClick={this.handleShowMore}>Загрузить
                                ещё
                            </button>
                        </div>

                    </div>
                );
        }
    };

    closeModal = () => {
        this.setState({modalOpen: null})
    };

    handleClick = id => e => {
        e.preventDefault();

        this.setState({modalOpen: id})
    };

    handleShowMore = () => {
        const showNews = this.state.newsShown + 3;
        this.setState({newsShown: showNews})
    }
}

export default BalanceOperator;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MapBody extends Component {
    render() {
        return (
            <div>

                <div className="uk-section">
                    <div className="uk-container">
                        <h3 className="uk-text-primary">Найдите ближайший источник чистой воды</h3>
                    </div>
                </div>

                <div className="uk-section uk-background-primary">
                    <div className="uk-container">
                        <div className="tm-map-form">
                            <div className="uk-width-1-1">
                                <input className="uk-input" type="text" placeholder="Введите ваш город" />
                            </div>
                            <button className="uk-button uk-button-primary">Найти</button>
                        </div>
                    </div>
                </div>

                <div className="tm-map-holder" id="map">

                </div>

            </div>
        );
    }
}

MapBody.propTypes = {};

export default MapBody;

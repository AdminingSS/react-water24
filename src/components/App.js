import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Screen from './Screen';
import Navbar from './Navbar';
import Message from './Message';
import {connect} from 'react-redux';
import ViewportController from './ViewportController';
import Loader from './Loader';
import {getScreen} from '../selectors';

class App extends Component {

    static propTypes = {
        //from connect
        activeScreen: PropTypes.string.isRequired
    };

    static defaultProps = {
        activeScreen: 'map'
    }

    state = {
        loading: false
    };

    render() {
        return (
            <div className="App">
                <ViewportController />
                <div className="uk-offcanvas-content">
                    <div
                        className="uk-child-width-1-1 uk-height-viewport uk-position-relative uk-flex uk-flex-wrap uk-flex-wrap-between">
                        <Screen className = {classNames('tm-screen', [`tm-${this.props.activeScreen}`])} />
                        <Loader />
                        <footer>
                            <Navbar />
                        </footer>
                    </div>
                    <div id="offcanvas-overlay" uk-offcanvas="mode: push; overlay: true">
                        <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" data-uk-close />

                            <div className="uk-card uk-flex uk-flex-center">
                                <ul className="uk-nav">
                                    <li><a href="#">1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Message />
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
    activeScreen: ownProps.activeScreen
}), null)(App)
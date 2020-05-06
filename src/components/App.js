import React, {Component} from 'react';
import Screen from './Screen';
import Navbar from './Navbar';
import Message from './Message';
import ViewportController from './ViewportController';
import Loader from './Loader';

class App extends Component {

    render() {
        return (
            <div className="App">
                <ViewportController />
                <div className="uk-offcanvas-content">
                    <div
                        className="uk-child-width-1-1 uk-height-viewport uk-position-relative uk-flex uk-flex-wrap uk-flex-wrap-between">
                        <Screen />
                        <Loader />
                        <footer>
                            <Navbar />
                        </footer>
                    </div>
                    <div id="offcanvas-overlay" data-uk-offcanvas="mode: push; overlay: true">
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

export default App
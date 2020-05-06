import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getNewsItem} from "../selectors";

class NewsItem extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        handleClick: PropTypes.func.isRequired,
        //from connect
        newsItem: PropTypes.object.isRequired
    };

    render() {
        const {handleClick, newsItem, id} = this.props;

        return (
            <a href="#" className="tm-news-item" onClick={handleClick(id)}>
                <div className="uk-width-auto">
                    <div className="tm-image-holder ">
                        <img src={require('../assets/images/'+ newsItem.image)} alt=""/>
                    </div>
                </div>
                <div className="uk-width-expand">
                    <div className="tm-heading">
                        {newsItem.caption}
                    </div>
                    <div>
                        {newsItem.text}
                    </div>
                </div>
            </a>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        newsItem: getNewsItem(state, ownProps)
    };
};

export default connect(mapStateToProps)(NewsItem);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class NewsItem extends Component {
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

NewsItem.propTypes = {};

export default connect((state, ownProps) => ({
    newsItem: state.news.news.filter(item => item.id === ownProps.id)[0]
}), null )(NewsItem);

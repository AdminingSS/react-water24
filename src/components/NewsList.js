import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import {connect} from "react-redux";

class NewsList extends Component {

    render() {
        const {news, type, handleClick, show} = this.props;
        const newsItems = (type === 'pinned') ? news.filter(item => item.type === type) : news.slice(0, show);
        const newsElements = newsItems.map(elem => <NewsItem handleClick = {handleClick} id={elem.id} key={elem.id}/>);

        const newsClass = (type === 'pinned') ? 'tm-news-pinned' : 'tm-news-all';
        const newsHeader = (type === 'pinned') ? 'Закрепленные записи' : 'Все записи';

        return (
            <div className={'tm-news ' + newsClass}>
                <div className="tm-heading">{newsHeader}</div>
                {newsElements}
            </div>
        );
    }
}

NewsList.propTypes = {};

export default connect((state) => ({
    news: state.news.news
}), null )(NewsList);

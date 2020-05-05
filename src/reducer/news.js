import newsArray from '../newsArray';

const newsDefaultState = {
    news: newsArray
};

export default ( news =  newsDefaultState, action) => {
    const {type, payload} = action;

    return news
}
import {createSelector} from 'reselect';
import {DESKTOP_WIDTH} from '../constants';

const getAccordions = state => state.accordions;

export const getUserBalance = state => state.user.balance;
export const getUserSubscription = state => state.user.subscription;
export const getUserHistory = state => state.user.history;
export const getUserStatus = state => state.user.status

export const getLoaderShown = state => state.system.loaderShown;
export const getMessageActive = state => state.system.messageActive;
export const getMessageData = state => state.system.messageData;

export const getDevice = state => state.viewport.width > DESKTOP_WIDTH;
export const getScreen = state => state.screen;

export const getNews = state => state.news.news;
export const getNewsItem = (state, ownProps) => state.news.news.filter(item => item.id === ownProps.id)[0];

export const getAccordionContent = createSelector(getAccordions, getScreen,(accordions, screen) => accordions[screen]);

// const filtersGetter = state => state.filters;
// const articlesGetter = state => state.articles.entities;
// const commentsGetter = state => state.comments.entities;
// const idGetter = (state, props) => props.id;
//
// export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
//     const {selected, dateRange: {from, to}} = filters;
//
//     return mapToArr(articles).filter(article => {
//         const published = Date.parse(article.date)
//         return (!selected.length || selected.includes(article.id)) &&
//             (!from || !to || (published > from && published < to))
//     })
// });
//
// export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) =>{
//     return comments.get(id)
// });
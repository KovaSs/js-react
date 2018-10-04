import { createSelector } from 'reselect'

export const filtersGetter = state => state.filters
export const articlesGetter = state => state.articles
export const commentsGetter = state => state.comments
export const idGetter = (state, props) => props.id

export const filtratedArticleSelector = createSelector( articlesGetter, filtersGetter, (articles, filters) => {
  const {selected, dateRange: {from,to}} = filters
  return articles.filter(article => {
    const published = Date.parse(article.date)
    return(!selected.length || selected.includes(article.id)) &&
    (!from || !to || (published > from && published < to))
  })
})

export const commentSelectorFactory = () => createSelector( commentsGetter, idGetter, (comments, id) => {
  console.log('---', 'getting comment')
  // return comments.find(comment => comment.id === id)
  return comments[id]
})

/* Ранее использованный код до селекторов
  export function filtrateArticles({filters, articles}) {
  const {selected, dateRange: {from,to}} = filters
  return articles.filter(article => {
    const published = Date.parse(article.date)
    return(!selected.length || selected.includes(article.id)) &&
    (!from || !to || (published > from && published < to))
  })
} */

import {Map, Record} from 'immutable'
import {articles as defaultArticles} from '../mock'
import {arrToMap} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES} from '../constans'

const defaultState  = new Map({}) 

const ArticleRecord = Record({
  text: undefined,
  title: '',
  comments: []
}) 

export default (articleState = defaultState, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case DELETE_ARTICLE: 
      /* 
      const tmpState = {...articleState}
      delete tmpState[payload.id]
      return tmpState 
       ▼ Заменено с помощью immutable.js */
      return articleState.delete(payload.id)

    case ADD_COMMENT:
      /* Передаем по какому пути мы хотим поменять чтото ► [payload.articleId, 'comments'] ◄
      как это что-то мы хотим поменять ► comments => comments.concat(randomId) ◄ */
      return articleState.updateIn( [payload.articleId, 'comments'],  comments => comments.concat(randomId))
      /* ▲ Заменено с помощью метода updateIn из пакета immutable.js 
      const article = articleState[payload.articleId]
      return {
        ...articleState,
        [payload.articleId] : {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      } */

    case LOAD_ARTICLES: 
      return arrToMap(response, ArticleRecord)
  }
  return articleState
}
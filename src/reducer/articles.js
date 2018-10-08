import {Record, OrderedMap, Map} from 'immutable'
import {articles as defaultArticles} from '../mock'
import {arrToMap} from '../helpers'
import {
  DELETE_ARTICLE,
  LOAD_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START, SUCCESS
} from '../constans'

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  loading: false,
  comments: []
})

const ReducerState  = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
})

const defaultState  = new ReducerState()

export default (articleState = defaultState, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case DELETE_ARTICLE: 
      /* 
      const tmpState = {...articleState}
      delete tmpState[payload.id] 
      return tmpState 
       ▼ Заменено с помощью immutable.js */
      return articleState.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      /* Передаем по какому пути мы хотим поменять чтото ► [payload.articleId, 'comments'] ◄
      как это что-то мы хотим поменять ► comments => comments.concat(randomId) ◄ */
      return articleState.updateIn( 
          ['entities', payload.articleId, 'comments'],
          comments => comments.concat(randomId)
        )
      /* ▲ Заменено с помощью метода updateIn из пакета immutable.js 
      const article = articleState[payload.articleId]
      return {
        ...articleState,
        [payload.articleId] : {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      } */

    case LOAD_ALL_ARTICLES + START: 
      return articleState.set('loading', true)
      
      case LOAD_ALL_ARTICLES + SUCCESS: 
      return articleState
      .set('entities', arrToMap(response, ArticleRecord))
      .set('loading', false)
      .set('loaded', true)
      
      case LOAD_ARTICLE + START: 
        return articleState.setIn(['entities', payload.id, 'loading'], true)
      
      case LOAD_ARTICLE + SUCCESS: 
        return articleState.setIn(['entities', payload.id,], new ArticleRecord(payload.response))
  }
  return articleState
}
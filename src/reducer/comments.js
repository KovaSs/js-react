import { OrderedMap, Record, Map } from 'immutable'
import { arrToMap } from '../helpers'
import { 
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_FOR_PAGE,
  SUCCESS,
  START
 } from '../constans'

// Описание модели комментария
const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

// Задание форму нашего reducer'a для комментов
const ReducerState = Record({
  entities: new OrderedMap({}),
  // ▼ Хранение id комментов которые уже были загружены, чтобы легко перезодить со страницы на страницу
  pagination: new Map({}),
  // ▼ Сколько вообще доступо комментариев на сервере
  total: null
})

const defaultState = ReducerState()

export default (commentsState = defaultState, action) => {
  const {type, payload, response, randomId} = action

  switch(type) {
    case ADD_COMMENT:
      return commentsState.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

      case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord))) 
      
      case LOAD_COMMENTS_FOR_PAGE + START:
      return commentsState.setIn(['paginstion', payload.page, 'loading'], true) 
      
      case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
      return commentsState
        .setIn('total', response.total)
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
        .setIn(['pagination', payload.page, 'loading'], false)
  }
  return commentsState
}
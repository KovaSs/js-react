import { OrderedMap, Record } from 'immutable'
import { arrToMap } from '../helpers'
import { 
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  SUCCESS
 } from '../constans'

// Описание модели комментария
const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})
// Задание форму нашего reducer'a для комментов
const ReducerState = Record({
  entities: new OrderedMap({})
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

  }
  return commentsState
}
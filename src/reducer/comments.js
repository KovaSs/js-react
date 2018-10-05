import { comments as defaultComments } from '../mock'
import { ADD_COMMENT } from '../constans'
import { arrToMap } from '../helpers'

const commentsMap = arrToMap(defaultComments)

export default (commentsState = commentsMap, action) => {
  const {type, payload} = action

  switch(type) {
    case ADD_COMMENT:
      return {...commentsState, [randomid]: payload.comment}
  }
  return commentsState
}
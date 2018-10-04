import {comments as defaultComments} from '../mock'
import {} from '../constans'

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})


export default (commentsState = commentsMap, action) => {
  const {type, payload} = action

  switch(type) {

  }
  return commentsState
}
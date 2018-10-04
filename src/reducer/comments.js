import {comments as defaultComments} from '../mock'
import {} from '../constans'


export default (commentsState = defaultComments, action) => {
  const {type, payload} = action

  switch(type) {

  }
  return commentsState
}
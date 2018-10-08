import {
  INCREMENT, 
  DELETE_ARTICLE, 
  LOAD_ARTICLE, 
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT, 
  LOAD_ALL_ARTICLES,
  START, SUCCESS, FAIL
} from '../constans'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}
export function loadArticle(id) {
 /* Более простой метод по получению статей 
    return {
    type: LOAD_ARTICLE,
    callAPI: '/api/article'
  } */
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: {id}
    })
    // Только для Dew режима, чтобы показать загрузку
    setTimeout(() => {
      fetch(`/api/article/${id}`)
        .then(res => res.json())
        .then(response => dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: {id, response}
        }))
        .catch(error => dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: {id, error}
        }))
    }, 1000)
  }
}

export function changeDateRange(dateRange) {
  return {
      type: CHANGE_DATE_RANGE,
      payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
      type: CHANGE_SELECTION,
      payload: { selected }
  }
}

export function addComment(comment, articleId) {
  return {
      type: ADD_COMMENT,
      payload: { comment, articleId },
      generatedId: true
  }
}

export function loadArticles() {
  return {
      type: LOAD_ALL_ARTICLES,
      callAPI: '/api/article/'
  }
}
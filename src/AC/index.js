import {
  INCREMENT, 
  DELETE_ARTICLE, 
  LOAD_ARTICLE, 
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT, 
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE_COMMENTS,
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

export function loadArticles() {
  return {
      type: LOAD_ALL_ARTICLES,
      callAPI: '/api/article/'
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
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
    // Только для dew-режима, чтобы показать загрузку
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
import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SET_RANGE } from '../constants'

export function increment () {
  return {
    type: INCREMENT
  }
}

export function deleteArticle (id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function selectArticle (selected) {
  return {
    type: SELECT_ARTICLE,
    payload: {selected}
  }
}

export function setRange (range) {
  return {
    type: SET_RANGE,
    payload: {range}
  }
}

import { SELECT_ARTICLE, SET_RANGE } from '../constants'

export default (
  {
    selected = null,
    range = {
      from: null,
      to: null
    }
  } = {},
  action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return {
        selected: payload.selected,
        range
      }
    case SET_RANGE:
      return {
        selected,
        range: payload.range
      }
  }

  return { selected, range }
}

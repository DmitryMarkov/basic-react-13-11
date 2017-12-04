import { SELECT_ARTICLE } from '../constants'

export default ({ selected = null, from = null, to = null } = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return {
        selected: payload.selected,
        from,
        to
      }
  }

  return { selected, from, to }
}

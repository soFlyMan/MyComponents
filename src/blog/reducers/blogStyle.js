import { TOGGLE_BLOG }  from '../actions/blogStyle.js'

export const isBlogToggled = (state={ toogle: false }, action) => {
  switch(action.type) {
    case TOGGLE_BLOG:
      return {
        toggle: action.payload
      }
    default:
      return state
  }
}

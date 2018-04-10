import { TOGGLE_BLOG }  from '../actions/blogStyle.js'

const initialState = {
  toggle: true
}
export const isBlogToggled = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_BLOG:
      return {
        toggle: !state.toggle
      }
    default:
      return state
  }
}

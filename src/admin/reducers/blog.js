import { ADD_NEW_BLOG, ADDED_NEW_BLOG, ADD_NEW_BLOG_ERR } from '../actions/blog.js'

const initState = {
  isAdding: false,
  isAdded: false,
  err: null,
  status: null,
}

export const addingBlog = (state = initState, action) => {
  switch(action.type) {
    case ADD_NEW_BLOG:
      return {
        ...state,
        isAdding: true,
        isAdded: false,
      }
    case ADDED_NEW_BLOG:
      return {
        ...state,
        isAdding: false,
        isAdded: true,
        status: action.payload
      }
    case ADD_NEW_BLOG_ERR:
      return {
        ...state,
        isAdding: false,
        isAdded: false,
        err: action.payload
      }
    default:
      return state
  }
}

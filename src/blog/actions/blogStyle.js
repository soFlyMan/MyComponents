export const TOGGLE_BLOG = 'TOGGLE_BLOG'

export const toggleBlog = (payload) => {
  return {
    type: TOGGLE_BLOG,
    payload,
  }
}

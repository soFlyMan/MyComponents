export const ADD_NEW_BLOG = 'ADD_NEW_BLOG'
export const ADDED_NEW_BLOG = 'ADDED_NEW_BLOG'
export const ADD_NEW_BLOG_ERR = 'ADD_NEW_BLOG_ERR'

export const addBlog = (url, params) => {
  return dispatch => {
    dispatch({ type: ADD_NEW_BLOG })
    return fetch(url, params).then(res => {
      res.json().then(data => {
        dispatch({ type: ADDED_NEW_BLOG, payload: data })
      }).catch(err => {
        dispatch({ type: ADD_NEW_BLOG_ERR, payload: err})
      })
    })
  }
}

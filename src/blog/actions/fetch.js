export const FETCH_ALL_TAGS = 'FETCH_ALL_TAGS',
             FETCHED_ALL_TAGS = 'FETCHED_ALL_TAGS',
             FETCH_ALL_TAGS_ERR = 'FETCH_ALL_TAGS_ERR'

export const FETCH_ALL_BLOGS = 'FETCH_ALL_BLOG',
             FETCHED_ALL_BLOGS = 'FETCHED_ALL_BLOGS',
             FETCH_ALL_BLOGS_ERR = 'FETCH_ALL_BLOGS_ERR'

export const GET_BLOGS_BY_TAG = 'GET_BLOGS_BY_TAG'

export const HANDLE_ACTIVE = 'HANDLE_ACTIVE'

export const fetchAllTags = (url, params) => {
  return dispatch => {
    dispatch({ type: FETCH_ALL_TAGS })
    return fetch(url, params).then(res => {
      res.json().then(data => {
        dispatch({ type: FETCHED_ALL_TAGS, payload: data })
      }).catch(err => {
        dispatch({ type: FETCH_ALL_TAGS_ERR, payload: err})
      })
    })
  }
}

export const fetchAllBlogs = (url, params) => {
  return dispatch => {
    dispatch({ type: FETCH_ALL_BLOGS })
    return fetch(url, params).then(res => {
      res.json().then(data => {
        dispatch({ type: FETCHED_ALL_BLOGS, payload: data })
      }).catch(err => {
        dispatch({ type: FETCH_ALL_BLOGS_ERR, payload: err})
      })
    })
  }
}

export const getBlogsByTag = (tagName) => ({
    type: GET_BLOGS_BY_TAG,
    tagName
})

export const handleActive = (tagName) => ({
  type: HANDLE_ACTIVE,
  tagName
})

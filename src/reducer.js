import { combineReducers } from 'redux'
import { isBlogToggled } from './blog/reducers/blogStyle.js'

import { fetchingAllTags, fetchingAllBlogs } from './blog/reducers/fetch.js'
import { addingBlog } from './admin/reducers/blog.js'

const app = combineReducers({
  isBlogToggled,
  fetchingAllTags,
  fetchingAllBlogs,
  addingBlog,
})

export default app

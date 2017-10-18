import { FETCH_ALL_TAGS, FETCHED_ALL_TAGS, FETCH_ALL_TAGS_ERR, HANDLE_ACTIVE,
         FETCH_ALL_BLOGS, FETCHED_ALL_BLOGS, FETCH_ALL_BLOGS_ERR, GET_BLOGS_BY_TAG  } from '../actions/fetch.js'

const tagState = {
  isFetching: false,
  isFetched: false,
  err: null,
  data: [],
}
export const fetchingAllTags = (state = tagState, action) => {
  switch(action.type) {
    case FETCH_ALL_TAGS:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      }
    case FETCHED_ALL_TAGS:
      return {
        isFetching: false,
        isFetched: true,
        data: action.payload.map(val => {
          val.active = false
          return val
        }),
        err: null,
      }
    case FETCH_ALL_TAGS_ERR:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        err: action.err,
      }
    case HANDLE_ACTIVE:
      return {
        ...state,
        data: state.data.map(val => {
          val.active = false
          if(val.name == action.tagName) {
            val.active = true
          }
          return val
        })
      }
    default:
      return state
  }
}

const allBlogs = {
  isFetching: false,
  isFetched: false,
  err: null,
  data: [],
  isTag: [],
}
export const fetchingAllBlogs = (state = allBlogs, action) => {
  switch(action.type) {
    case FETCH_ALL_BLOGS:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      }
    case FETCHED_ALL_BLOGS:
      return {
        ...state,
        isTag: action.payload,
        isFetching: false,
        isFetched: true,
        data: action.payload,
        err: null,
      }
    case FETCH_ALL_BLOGS_ERR:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        err: action.err,
      }
    case GET_BLOGS_BY_TAG:
      return {
        ...state,
        isTag: state.data.filter(val => {
          var hasTag =  val.tag.filter(val => {
            return val.name == action.tagName
          })
          return hasTag.length !== 0
        })
      }
    default:
      return state
  }
}

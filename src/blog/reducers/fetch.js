import { FETCH_ALL_TAGS, FETCHED_ALL_TAGS, FETCH_ALL_TAGS_ERR, HANDLE_ACTIVE,
         FETCH_ALL_BLOGS, FETCHED_ALL_BLOGS, FETCH_ALL_BLOGS_ERR, GET_BLOGS_BY_TAG, GET_ALL_BY_TAG  } from '../actions/fetch.js'

const tagState = {
  isFetching: false,
  isFetched: false,
  isAllActive: true,
  data: [],
  err: null,
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
        ...state,
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
        isAllActive: false,
        data: state.data.map(val => {
          val.active = false
          if(val.name == action.tagName) {
            val.active = true
          }
          return val
        })
      }
    case GET_ALL_BY_TAG:
      return {
        ...state,
        isAllActive: true,
        data: state.data.map(val => {
          val.active = false
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
  data: // 20180325024024
    // http://localhost:8080/blog/getAllBlogs

    [
      {
        "_id": "5a94302b0842f610558c8d33",
        "title": "new blog",
        "body": "> Screw it!!!",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-26T16:04:02.394Z",
          "createAt": "2018-02-26T16:04:02.394Z"
        },
        "tag": [
          {
            "name": "Life",
            "_id": "5a94302b0842f610558c8d35"
          },
          {
            "name": "technology",
            "_id": "5a94302b0842f610558c8d34"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      },
      {
        "_id": "5a92526cbfbd6307aea87fcb",
        "title": "A new life?",
        "body": "# what's life?\n\nCan someone tell me what does life mean? Go to school, and then work, then get married. Maybe it described most of people's whole life.\n\nBut it's not suitable for me.",
        "__v": 0,
        "comments": [

        ],
        "meta": {
          "pv": 0,
          "updateAt": "2018-02-25T06:00:47.831Z",
          "createAt": "2018-02-25T06:00:47.831Z"
        },
        "tag": [
          {
            "name": "life",
            "_id": "5a92526cbfbd6307aea87fcc"
          }
        ],
        "author": "soFly"
      }
    ],
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
    case GET_ALL_BY_TAG:
      return {
        ...state,
        isTag: state.data
      }
    default:
      return state
  }
}

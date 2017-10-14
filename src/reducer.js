import { combineReducers, dispatch } from 'redux'
import { isBlogToggled } from './blog/reducers/blogStyle.js'

const ADD = 'ADD'
const DEC = 'DEC'

const addCount = () => {
  return {
    type: ADD
  }
}

const decCount = () => {
  return {
    type: ADD
  }
}

const iniState = {
  count: 1,
}

const Add_count = (state=iniState,action) => {
  switch(action.type) {
    case ADD:
      return Object.assign({},state,{
        count: state.count++
      })
    default:
      return state
  }
}

const Dec_count = (state=iniState,action) => {
  switch(action.type) {
    case DEC:
      return Object.assign({},state,{
        count: state.count--
      })
    default:
      return state
  }
}

const app = combineReducers({Add_count, Dec_count, isBlogToggled})

export default app

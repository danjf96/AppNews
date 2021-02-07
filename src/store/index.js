
import { combineReducers } from 'redux'
import news from './ducks/news'

const reducers = {
    news
}

export { reducers }

export default combineReducers(reducers)
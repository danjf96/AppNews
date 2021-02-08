
import { combineReducers } from 'redux'
import news from './ducks/news'
import article from './ducks/article'

const reducers = {
    news,
    article
}

export { reducers }

export default combineReducers(reducers)
import api, { errorTreatment } from "../../services/api"

//TYPES
export const Types = {
    GET_NEWS: 'GET_NEWS',
    LOAD_NEWS: 'GET_NEWS',
}

//REDUCERS
const INITIAL_STATE = {
    loading: false,
    categories: ['technology','science'],
    selectedCategory: 'technology'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_NEWS: 
            return { ...state, ...action.payload }
        case Types.LOAD_NEWS:
            return { ...state, loading: action.loading } 
        default:
            return state;
    }
}

//Actions Creators
const getNews = (category, callback = () => null) => {
    // dispatch({ type: Types.LOAD_NEWS, loading: true })
    
    
}
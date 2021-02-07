import api, { errorTreatment } from "../../services/api"

//TYPES
export const Types = {
    GET_NEWS: 'GET_NEWS',
    LOAD_NEWS: 'LOAD_NEWS',
    SET_ALL: 'SET_ALL',
}

//REDUCERS
const INITIAL_STATE = {
    loading: false,
    categories: ['technology','science'],
    selectedCategory: 'technology',
    list: [],
    num_results: 0,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_NEWS: 
            return { ...state, ...action.payload }
        case Types.LOAD_NEWS:
            return { ...state, loading: action.loading } 
        case Types.SET_ALL:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

//Actions Creators
export const getNews = (category, callback = () => null) => {
    return async dispatch => {
        dispatch({ type: Types.LOAD_NEWS, loading: true })
        try{
            const { data, status } = await api.get(`${category}.json`)
            const { results, num_results } = data
            dispatch({ type: Types.GET_NEWS, payload: { list: results, num_results, loading: false } })
        } catch(e){
            dispatch({ type: Types.LOAD_NEWS, loading: false })
            errorTreatment(e)
        }   
    }
}

export const setCategory = (selectedCategory) => dispatch => dispatch({ type: Types.SET_ALL, payload: { selectedCategory } })
//TYPES
export const Types = {
    SET_ARTICLE: 'SET_ARTICLE',
    CLEAN_ARTICLE: 'CLEAN_ARTICLE'
}

//REDUCERS
const INITIAL_STATE = {
    openModal: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_ARTICLE: 
            return { ...state, ...action.article }
        case Types.CLEAN_ARTICLE:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const setArticle = (article) => dispatch => dispatch({ type: Types.SET_ARTICLE, article: {...article, openModal: true} })

export const cleanArticle = () => dispatch => dispatch({ type: Types.CLEAN_ARTICLE })
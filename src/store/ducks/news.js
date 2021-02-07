import api, { errorTreatment } from "../../services/api"

//TYPES
export const Types = {
    GET_NEWS: 'GET_NEWS',
}

//REDUCERS
const INITIAL_STATE = {
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_NEWS: 
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

//Actions Creators

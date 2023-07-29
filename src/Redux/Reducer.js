import { combineReducers } from 'redux'

const initialState = {
    searchData:"",
   
}

let CounterReducer = (state = initialState, Action) => {
    switch (Action.type) {
      
        case "SEARCHDATA":
            return {
                ...state, searchData: Action.payload
            }
        default:
            return state;
    }
}
let rootReducer = combineReducers({ combineReducersdata: CounterReducer })

export default rootReducer
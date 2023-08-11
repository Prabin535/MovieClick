import { combineReducers } from 'redux'
const initialState = {
    searcheddata:[],
}
let CounterReducer = (state = initialState, Action) => {
    switch (Action.type) {
            case "SEARCHEDDATA":
                return{
    ...state,searcheddata:Action.payload
                }
 
        default:
            return state;
    }
}
let rootReducer = combineReducers({ combineReducersdata: CounterReducer })
export default rootReducer
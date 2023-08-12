import { combineReducers } from "redux";
const initialState = {
    userName:'',
  searcheddata: [],
};
let CounterReducer = (state = initialState, Action) => {
  switch (Action.type) {
    case "LOGINSUCCESS":
      return {
        ...state,
        userName: Action.payload,
      };
    case "SEARCHEDDATA":
      return {
        ...state,
        searcheddata: Action.payload,
      };

    default:
      return state;
  }
};
let rootReducer = combineReducers({ combineReducersdata: CounterReducer });
export default rootReducer;

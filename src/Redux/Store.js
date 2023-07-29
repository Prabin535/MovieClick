import {legacy_createStore} from "redux"
import rootReducer from "./Reducer"
let Store=legacy_createStore(rootReducer);

export default Store

import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";

const reducers = combineReducers({
    collection : dashboardReducer
})

export default reducers;
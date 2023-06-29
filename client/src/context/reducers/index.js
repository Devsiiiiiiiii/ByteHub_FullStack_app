import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer.js";
import allUserReducer from "./allUserReducer";

const myReducers = combineReducers({
    user : userReducer,
    alert: alertReducer,
    products: productReducer,
    allUsers: allUserReducer,
})

export default myReducers;
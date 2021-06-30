import { combineReducers } from "redux";

import characterReducer from "./character/character.reducer";

export default combineReducers({
    character: characterReducer
});
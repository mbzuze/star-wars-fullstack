import { bindActionCreators } from "redux";

const INITIAL_STATE = {
    currentCharacter: null
}

const characterReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'SET_CURRENT_CHARACTER':
            return {
                ...state,
                currentCharacter: action.payload
            }
            break;
            
        default:
            return state;
            break;
    }
};

export default characterReducer;
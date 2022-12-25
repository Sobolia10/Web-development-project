import {combineReducers} from "@reduxjs/toolkit";

const initialAuthState = {
    username: 'sobolia',
    password: '12345',
    isAuth: false,
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case "AUTH":
            return { ...state, isAuth: action.payload }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    authReducer,
})
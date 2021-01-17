import * as userActionTypes from "../actionTypes/UserTypes";

const initialState = {
    user: {},
    pending: false,
    error: {}
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.USER_LOGIN_PENDING:
        case userActionTypes.USER_LOGIN_SUCCESS:
        case userActionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
};
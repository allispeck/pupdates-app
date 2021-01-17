import * as userActionTypes from "../actionTypes/UserTypes";
import apiAxios from "../Constants";

export const userLoginPending = () => {
    return {
        type: userActionTypes.USER_LOGIN_PENDING,
        pending: true,
        error: {}
    }
};
export const userLoginSuccess = (user) => {
    return {
        user,
        type: userActionTypes.USER_LOGIN_SUCCESS,
        pending: false,
        error: {}
    }

};
export const userLoginFailure = (error) => {
    return {
        type: userActionTypes.USER_LOGIN_FAILURE,
        pending: false,
        error
    }

};

export const userLogin = (payLoad) => {
    return async dispatch => {
        try {
            dispatch(userLoginPending());
            await apiAxios.get('/sanctum/csrf-cookie');

            const {data} = await apiAxios.post('api/login', {
                email: payLoad.email,
                password: payLoad.password
            });
            dispatch(userLoginSuccess(data));
        }
        catch (error) {
            dispatch(userLoginFailure(error))
        }
    }
};
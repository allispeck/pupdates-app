import * as userActionTypes from "actionTypes/UserTypes";
import apiAxios from "Constants";

/* Login Actions */

export const userLoginPending = () => {
    return {
        isLoggedIn: false,
        type: userActionTypes.USER_LOGIN_PENDING,
        pending: true,
        error: {}
    }
};
export const userLoginSuccess = (user) => {
    return {
        user,
        isLoggedIn: true,
        type: userActionTypes.USER_LOGIN_SUCCESS,
        pending: false,
        error: {}
    }

};
export const userLoginFailure = (error) => {
    return {
        isLoggedIn: false,
        type: userActionTypes.USER_LOGIN_FAILURE,
        pending: false,
        error
    }

};

export const userLogin = (payLoad) => {
    return async (dispatch) => {
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
            dispatch(userLoginFailure(error.response.data.errors))
        }
    }
};

/* Register Actions */

export const userRegisterPending = () => {
    return {
        isLoggedIn: false,
        type: userActionTypes.USER_REGISTER_PENDING,
        pending: true,
        error: {}
    }
};

export const userRegisterSuccess= () => {
    return {
        isLoggedIn: false,
        type: userActionTypes.USER_REGISTER_SUCCESS,
        pending: true,
        error: {}
    }
};

export const userRegisterFailure = () => {
    return {
        isLoggedIn: false,
        type: userActionTypes.USER_REGISTER_FAILURE,
        pending: true,
        error: {}
    }
};

export const userRegister = (payLoad) => {
    return async dispatch => {
        try {
            dispatch(userRegisterPending());
            await apiAxios.get('/sanctum/csrf-cookie');

            const {data} = await apiAxios.post('api/register', {
                name: payLoad.name,
                email: payLoad.email,
                password: payLoad.password
                // ...payLoad this would do the same thing in a much cleaner way.
            });
            dispatch(userRegisterSuccess(data));
        }
        catch (error) {
            dispatch(userRegisterFailure(error.response.data.errors))
        }
    }
};
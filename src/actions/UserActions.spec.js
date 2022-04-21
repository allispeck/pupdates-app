import {apiAxios} from "Constants";
import {userLogin, userRegister} from "actions/UserActions";
import * as userActionTypes from "actionTypes/UserTypes";
import {callAction} from "setupTests";

jest.mock("Constants");

const user = {
    id: 1,
    name: 'Herman',
    email: 'hermies@hermans.ca'
}

const error = {
    response: {
        data: {
            errors: ["Failure"]
        }
    }
};

const userLoginPayload = {
    email: user.email,
    password: 'password'
};

const registerPayload = {
    name: user.name,
    email: user.email,
    password: 'password'
}

describe("User Actions", () => {
    it("logs in the user successfully", async () => {
        // mock axios for cookie and post
        apiAxios.get.mockResolvedValue({});

        apiAxios.post.mockResolvedValue({data: user});

        const mockDispatch = jest.fn();

        await callAction(mockDispatch, userLogin, userLoginPayload);

        // that userLoginPending was called with data
        expect(mockDispatch).toHaveBeenCalledWith(
            {
                isLoggedIn: false,
                type: userActionTypes.USER_LOGIN_PENDING,
                pending: true,
                error: {}
            }
        );
        // that userLoginSuccess was called with data
        expect(mockDispatch).toHaveBeenLastCalledWith({
            user,
            isLoggedIn: true,
            type: userActionTypes.USER_LOGIN_SUCCESS,
            pending: false,
            error: {}
        });
    })

    it("catches errors if there is a user login failure", async () => {
        // mock axios for cookie and post
         apiAxios.get.mockRejectedValue(error);

        const mockDispatch = jest.fn();

        await callAction(mockDispatch, userLogin, userLoginPayload);

        // assert
        // that userLoginFailure was called with data
        expect(mockDispatch).toHaveBeenCalledWith({
            isLoggedIn: false,
            type: userActionTypes.USER_LOGIN_FAILURE,
            pending: false,
            error: error.response.data.errors
        });
    })

    it("registers a user successfully", async () => {
        apiAxios.post.mockResolvedValue({data: user});
        const mockDispatch = jest.fn();

        await callAction(mockDispatch, userRegister, registerPayload);

        expect(mockDispatch).toHaveBeenCalledWith({
            isLoggedIn: false,
            type: userActionTypes.USER_REGISTER_PENDING,
            pending: true,
            error: {}
        });
        expect(mockDispatch).toHaveBeenLastCalledWith({
            isLoggedIn: true,
            user,
            type: userActionTypes.USER_REGISTER_SUCCESS,
            pending: false,
            error: {}
        });
    });

    it("catches error when registering user fails", async () => {
        apiAxios.post.mockRejectedValue(error);
        const mockDispatch = jest.fn();

        await callAction(mockDispatch, userRegister, registerPayload);

        expect(mockDispatch).toHaveBeenCalledWith({
            isLoggedIn: false,
            pending: true,
            type: userActionTypes.USER_REGISTER_PENDING,
            error: {}
        });
        expect(mockDispatch).toHaveBeenCalledWith({
            isLoggedIn: false,
            pending: false,
            type: userActionTypes.USER_REGISTER_FAILURE,
            error: error.response.data.errors,
        });
    });
})

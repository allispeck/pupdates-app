import {apiAxios} from "Constants";
import {userLogin} from "actions/UserActions";
import * as userActionTypes from "actionTypes/UserTypes";

jest.mock("Constants");

const user = {
    id: 1,
    name: 'Herman',
    email: 'hermies@hermans.ca'
}

const error = {
    response: {
        data: {
            errors: "Failure"
        }
    }
};

const userLoginPayload = {
    email: user.email,
    password: 'password'
};

const callUserLogin = async (dispatch) => {
    const callback = userLogin(userLoginPayload);
    await callback(dispatch);
}

describe("User Actions", () => {
    it("logs in the user successfully", async () => {
        // mock axios for cookie and post
        apiAxios.get.mockResolvedValue({});

        apiAxios.post.mockResolvedValue({data: user});

        const mockDispatch = jest.fn();

        await callUserLogin(mockDispatch);

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

        await callUserLogin(mockDispatch);

        // assert
        // that userLoginFailure was called with data
        expect(mockDispatch).toHaveBeenCalledWith({
            isLoggedIn: false,
            type: userActionTypes.USER_LOGIN_FAILURE,
            pending: false,
            error: error.response.data.errors
        });
    })
})

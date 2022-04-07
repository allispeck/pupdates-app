import {apiAxios} from "Constants";
import {userLogin} from "actions/UserActions";
import * as userActionTypes from "actionTypes/UserTypes";

jest.mock("Constants");

describe("User Actions", () => {
    it("reach-endpoint", async () => {

        const user = {
            id: 1,
            name: 'Herman',
            email: 'hermies@hermans.ca'
        }

        // mock axios for cookie and post
        apiAxios.get.mockResolvedValue({});

        apiAxios.post.mockResolvedValue({data: user});

        // create variable for payload
        const payload      = {
            email: user.email,
            password: 'password'
        };
        const mockDispatch = jest.fn();

        // call userlogin with payload
        const callback = userLogin(payload);//(mockDispatch);
         await callback(mockDispatch);

        // assert

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
})
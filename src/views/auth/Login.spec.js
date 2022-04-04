import {fireEvent, } from "@testing-library/react";
import {Login} from "./Login";
import userEvent from "@testing-library/user-event";
import {userLogin} from "@/actions/UserActions";
import {render} from "@/tests/test-utils";
import {mockReduxDispatch} from "@/setupTests";

jest.mock("@/actions/UserActions");

const renderComponent = () => {
    return render(<Login />);
}

describe("Login", () => {
    it("renders", () => {
        const wrapper = renderComponent();
        expect(wrapper).toBeTruthy();
    });

    it("will login user when form is filled", () => {
        const email = "abc@test.ca";
        const password = "password";
        const wrapper = renderComponent();

        const emailInput = wrapper.getByTestId("email-input");
        fireEvent.change(emailInput, {target: {value: email}});

        const passwordInput = wrapper.getByTestId("password-input");
        fireEvent.change(passwordInput, {target: {value: password}});

        userEvent.click(wrapper.getByTestId("login-submit"));

        expect(mockReduxDispatch).toHaveBeenCalled();
        expect(userLogin).toHaveBeenCalledWith({email, password});
    });
})
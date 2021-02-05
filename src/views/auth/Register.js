import React, {useCallback} from 'react';
import Swal from 'sweetalert2';
import apiAxios from "../../Constants";
import {userRegister} from "../../actions/UserActions";
import {useDispatch} from "react-redux";

const Register = () => {
    const [email, setEmail]                     = React.useState('');
    const [confirmEmail, setConfirmEmail]       = React.useState('');
    const [password, setPassword]               = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName]                       = React.useState('');
    const dispatch                              = useDispatch();

    const updateName = useCallback(
        (e) => {
            setName(e.target.value);
            console.log(e.target.value);
        },
        [setName],
    );

    const updateEmail = useCallback(
        (e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
        },
        [setEmail],
    );

    const updateConfirmEmail = useCallback(
        (e) => {
            setConfirmEmail(e.target.value);
            console.log(e.target.value);
        },
        [setConfirmEmail],
    );

    const updatePassword = useCallback(
        (e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
        },
        [setPassword],
    );

    const updateConfirmPassword = useCallback(
        (e) => {
            setConfirmPassword(e.target.value);
            console.log(e.target.value);
        },
        [setConfirmPassword],
    );
    const isValid               = useCallback(
        () => {
            if (password !== confirmPassword || email !== confirmEmail) {
                Swal.fire({
                    title: 'Email/Password Mismatch!',
                    text: 'Please re-enter your email and password',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
                return false;
            }
            return true;
        },
        [password, confirmPassword, confirmEmail, email],
    );


    const registerUser = useCallback(
        (e) => {
            e.preventDefault();

            if (!isValid()) {
                return;
            }
            dispatch(userRegister({
                name,
                email,
                password
            }));

        },
        [name, password, email, isValid],
    );

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Register
                    </h2>

                    <form className="mt-10" method="POST" onSubmit={registerUser}>
                        <label htmlFor="name"
                               className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
                        <input value={name}
                               onChange={updateName} id="name" type="text" name="name"
                               placeholder="name"
                               autoComplete="name"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="email"
                               className="block text-xs font-semibold text-gray-600 uppercase mt-8">Email</label>
                        <input value={email}
                               onChange={updateEmail} id="email" type="email" name="email"
                               placeholder="email address"
                               autoComplete="email"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="confirmEmail"
                               className="block text-xs font-semibold text-gray-600 uppercase mt-8">Confirm
                            Email</label>
                        <input value={confirmEmail}
                               onChange={updateConfirmEmail} id="confirmEmail" type="email" name="confirmEmail"
                               placeholder="confirm email address"
                               autoComplete="confirm email"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="password"
                               className="block mt-8 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input value={password}
                               onChange={updatePassword} id="password" type="password"
                               name="password" placeholder="password"
                               autoComplete="current-password"
                               className="block w-full px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="confirmPassword"
                               className="block mt-8 text-xs font-semibold text-gray-600 uppercase">Confirm
                            Password</label>
                        <input value={confirmPassword}
                               onChange={updateConfirmPassword} id="confirmPassword" type="password"
                               name="confirmPassword" placeholder="confirm password"
                               autoComplete="confirm-password"
                               className="block w-full px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Register
                        </button>

                        <div className="flex flex-wrap mt-8 mb-4 text-sm justify-center">
                            <a href="/login" className="underline">
                                Already have an account?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;
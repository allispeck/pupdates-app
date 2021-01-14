import React, {useCallback} from 'react';
import Swal from 'sweetalert2';
import apiAxios from "./Constants";

const Register = () => {
    const [email, setEmail]                     = React.useState('');
    const [confirmEmail, setConfirmEmail]       = React.useState('');
    const [password, setPassword]               = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [name, setName]                       = React.useState('');

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
            apiAxios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        apiAxios.post('api/register', {
                            name: name,
                            email: email,
                            password: password
                        }).then(response => {
                            if (response.status === 204) {

                            }
                        })
                    });
        },
        [name, password, email, apiAxios, isValid],
    );

    return (
        <>
            <div className="flex flex-col h-screen bg-gray-100">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Login
                        </h2>

                        <form className="mt-10" method="POST" onSubmit={handleSubmit}>
                            <label htmlFor="email"
                                   className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                            <input value={email}
                                   onChange={e => setEmail(e.target.value)} id="email" type="email" name="email"
                                   placeholder="e-mail address"
                                   autoComplete="email"
                                   className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                   required/>

                            <label htmlFor="password"
                                   className="block mt-8 text-xs font-semibold text-gray-600 uppercase">Password</label>
                            <input value={password}
                                   onChange={e => setPassword(e.target.value)} id="password" type="password"
                                   name="password" placeholder="password"
                                   autoComplete="current-password"
                                   className="block w-full px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                   required/>

                            <button type="submit"
                                    className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Login
                            </button>

                            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                                <a href="forgot-password" className="flex-2 underline">
                                    Forgot password?
                                </a>

                                <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                                    or
                                </p>

                                <a href="register" className="flex-2 underline">
                                    Create an Account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <form onSubmit={registerUser}>
                    <div>
                        <input type="text" name="name" placeholder="Name" onChange={updateName} required/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={updateEmail} required/>
                    </div>
                    <div>
                        <input type="email" name="confirm-email" placeholder="Confirm Email"
                               onChange={updateConfirmEmail}
                               required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" onChange={updatePassword}
                               required/>
                    </div>
                    <div>
                        <input type="password" name="confirm-password" placeholder="Confirm Password"
                               onChange={updateConfirmPassword} required/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
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
        <div>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={updateName} required/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={updateEmail} required/>
                </div>
                <div>
                    <input type="email" name="confirm-email" placeholder="Confirm Email" onChange={updateConfirmEmail}
                           required/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={updatePassword} required/>
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
    );
};

export default Register;
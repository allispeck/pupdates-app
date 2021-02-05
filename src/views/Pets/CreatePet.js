import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {petCreation} from "../../actions/PetActions";
import connect from "react-redux/es/connect/connect";


const CreatePet = ({error}) => {
    const [name, setName]               = useState('');
    const [breed, setBreed]             = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const dispatch                      = useDispatch();
    const history                       = useHistory();


    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(petCreation({
                name,
                breed,
                dateOfBirth,
            }));
        },
        [name, breed, dateOfBirth, dispatch]
    );


    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Add New Pet
                    </h2>

                    <form className="mt-10" method="POST" onSubmit={handleSubmit}>
                        <label htmlFor="name"
                               className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
                        <input value={name}
                               onChange={e => setName(e.target.value)} id="name" type="text" name="name"
                               placeholder="name"
                               autoComplete="name"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="breed"
                               className="block text-xs font-semibold text-gray-600 uppercase mt-8">Breed</label>
                        <input value={breed}
                               onChange={e => setBreed(e.target.value)} id="breed" type="text" name="breed"
                               placeholder="Breed"
                               autoComplete="breed"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>

                        <label htmlFor="dateOfBirth"
                               className="block text-xs font-semibold text-gray-600 uppercase mt-8">Date of
                            Birth</label>
                        <input value={dateOfBirth}
                               onChange={e => setDateOfBirth(e.target.value)} id="dateOfBirth" type="date"
                               name="dateOfBirth"
                               placeholder="dateOfBirth"
                               autoComplete="dateOfBirth"
                               className="block w-full px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                               required/>


                        <button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                            Create
                        </button>

                    </form>
                </div>
            </div>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        error: state.petState.error
    }
};

export default connect(mapStateToProps)(CreatePet);
// export default Login;

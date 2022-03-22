import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faDog} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [show, setShow] = React.useState(false);

    return (

        <div className="flex border-b border-gray-800 py-2 px-2 flex-wrap justify-between">
            <div className="text-2xl font-semibold tracking-wide">
                <FontAwesomeIcon icon={faDog} className="pr-1 text-4xl"/>
                PupDates
            </div>

            {/*if mobile*/}
            <div className="flex justify-end hidden md:block">
                <NavLink className="self-center mx-1 font-bold" to='/login'>Login</NavLink>
                <NavLink className="self-center mx-1" to='/register'>Register</NavLink>
            </div>

            <div className="flex justify-end md:hidden">
                <button className="px-2 text-gray-800 focus:outline-gray" onClick={() => setShow(!show)}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
            {
                show &&

                <div className="w-full flex flex-col justify-center pt-2 md:hidden">
                    <NavLink className="self-center" to='/login'>Login</NavLink>
                    <NavLink className="self-center" to='/register'>Register</NavLink>
                </div>
            }
        </div>
    )
};


export default Navbar;
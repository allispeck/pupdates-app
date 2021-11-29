import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faDog} from "@fortawesome/free-solid-svg-icons";
import {MOBILE_SCREEN_SIZE} from "../Constants";


const Navbar = () => {
    const [show, setShow] = React.useState(false);

    let w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= MOBILE_SCREEN_SIZE) {
        return(
// Probably mobile - this isn't working right now though

            <div className="flex border-b border-gray-800 py-2 px-2 flex-wrap justify-between">
                <div className="text-2xl font-semibold tracking-wide">
                    <FontAwesomeIcon icon={faDog} className="pr-1 text-4xl"/>
                    PupDates
                </div>
                {/*if mobile*/}
                <div className="flex justify-end">
                    <button className="px-2 text-gray-800 focus:outline-gray" onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
                {
                    show &&

                    <div className="w-full flex flex-col justify-center pt-2">
                        <NavLink className="self-center" to='/login'>Login</NavLink>
                        <NavLink className="self-center" to='/register'>Register</NavLink>
                    </div>
                }
            </div>

    )
    }
// Probably desktop
        return (
            <div className="flex border-b border-gray-800 py-2 px-2 flex-wrap justify-between">
                <div className="text-2xl font-semibold tracking-wide">
                    <FontAwesomeIcon icon={faDog} className="pr-1 text-4xl"/>
                    PupDates
                </div>
                <div className="flex justify-end">
                    <NavLink className="self-center mx-1 font-bold" to='/login'>Login</NavLink>
                    <NavLink className="self-center mx-1" to='/register'>Register</NavLink>
                </div>
            </div>

        );
};


export default Navbar;
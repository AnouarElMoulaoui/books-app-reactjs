import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
            <div className="bg-black h-10 text-white px-5 flex justify-around items-center p-1">
                <span className="text-lg uppercase font-bold">React books app</span>
                <ul className="flex space-x-2">
                    <li className="hover:text-blue-400">
                       <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-400">
                    <Link to="/favorite">Favorite</Link>
                    </li>
                </ul>
            </div>
        )
}

export default NavBar;
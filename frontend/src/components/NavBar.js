import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./log/Logout";

const NavBar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer)
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <NavLink exact to='/wall'>
                        <div className='logo'>
                            <img src='./img/logos/icon-left-font.png' alt='icone groupomania' />
                        </div>
                    </NavLink>
                </div>
                {uid ? (
                    <ul>
                        <li></li>
                        <li className='welcome'>
                            <NavLink exact to='/'>
                                <h5>Bienvenue {userData.firstName}</h5>
                            </NavLink>
                        </li>
                        <Logout />
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to='/'>
                                <img src='./img/icons/login.svg' alt='Login' />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./log/Logout";

const NavBar = () => {
    const uid = useContext(UidContext);

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
                            <NavLink exact to='/wall'>
                                <h5>Bienvenue sur 'Valeur dynamique'</h5>
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
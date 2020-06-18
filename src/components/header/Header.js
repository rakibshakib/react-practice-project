import React from 'react'
import {
    NavLink
} from "react-router-dom";
import logo from '../../img/brand-logo.png';
import './Header.css'
const Header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3" >
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/home">
                        <img src={logo} style={{width: "80px", height: "45px"}} alt="Brand logo"/>
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav  ml-auto ">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/home" >Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/about">About </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/team">Team </NavLink>
                            </li>
                        </ul>
                        <div>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Header;
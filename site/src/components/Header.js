import React, {useState} from "react";
import './Header.css'
import Navbar from "./Navbar";
import Logo from "C:/projetos_frontend/myportfolio/site/src/assets/Logo.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="container_logo">
                <img id="logo" src={Logo} alt="logo" />
            </div>
            <div className="container_header">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;
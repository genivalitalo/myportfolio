import React, {useState} from "react";
import './Header.css'
import Navbar from "./Navbar";
import Logo from "C:/projetos_frontend/myportfolio/src/assets/logo.png"

const Header = () => {
    return (
        <header className="header">
            <div className="container_logo">
                <img id="logo" src={Logo} alt="logo" />
                <h2 className="name_logo">Genival</h2>
            </div>
            <div className="container_header">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar(){

    return(
        <div className="NavBar">
            <Link to="/">MAIN</Link>
            <Link to="/registration">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/homepage">HomePage</Link>
        </div>
    )
}

export default NavBar;
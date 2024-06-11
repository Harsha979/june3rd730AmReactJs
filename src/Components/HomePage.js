import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function HomePage(){

    const navigate=useNavigate();

    return(
        <div>
            <NavBar/>
            <h1>HomePage Besant</h1>
            <button onClick={()=>{navigate("/")}}>Logout</button>
            <Link to="/">logout</Link>
        </div>
    )
}

export default HomePage;
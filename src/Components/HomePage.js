import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage(){

    const navigate=useNavigate();

    return(
        <div>
            <h1>HomePage Besant</h1>
            <button onClick={()=>{navigate("/")}}>Logout</button>
            <Link to="/">logout</Link>
        </div>
    )
}

export default HomePage;
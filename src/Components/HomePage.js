import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function HomePage(){

    const navigate=useNavigate();

    var fruitsArray=["apple","banana","pineapple","mango"];

    var fruitsObject={"name" : "apple","color":"red","taste":"sweet"}

    //useEffect ....
    useEffect(()=>{
            console.log("initially rendering in homepage");
    },[])

    return(
        <div>
            <NavBar/>
            <h1>HomePage Besant</h1>
            <h1>fruitsArrayNames</h1>
            {fruitsArray.map((name,index)=>{
                    return <div>{name+index}</div>;
            })}
            <h1>fruitsObjectNames</h1>
            {Object.entries(fruitsObject).map((name,index)=>{
                return <div>{name}</div>
            })}
            <button onClick={()=>{navigate("/")}}>Logout</button>
            <Link to="/">logout</Link>
        </div>
    )
}

export default HomePage;
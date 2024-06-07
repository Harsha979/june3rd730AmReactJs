import React, { useState } from "react";
import LoginPage from "./Login";

function RegistrationPage(){

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [address,setAddress]=useState("");

    function checkRegister(){
        if(userName !== ""){
              if(password !==""){
                    if(mobileNumber !== ""){
                            if(address !== ""){
                                alert("Registration success")
                            }
                            else{
                                alert("address is required")
                            }
                    }else{
                        alert("mobile number is required")
                    }
              }else{
                alert("password is required")
              }
        }else{
            alert("username is required")
        }
    }

    return(
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>RegistrationPage</h1>
            <label>UserName</label>
            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label>MobileNumber</label>
            <input type="text" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}></input>
            <label>Address</label>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}></input>
            <button onClick={()=>{checkRegister()}}>Register</button>
            <LoginPage registerUserName={userName} registerPassword={password}/>
        </div>
    )
}

export default RegistrationPage;

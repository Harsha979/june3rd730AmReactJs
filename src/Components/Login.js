import React, { useState } from "react";

function LoginPage(){
    // var count=0;

    // const [counter,setCounter] = useState(0);
    const [userName,setUsername]=useState("");
    const [password,setPassword]=useState("");

    function checkLogin(){
        if(userName !== ""){
            if(password !== ""){
                    alert("Login Success")
            }else{
                alert("password is required")
            }
        }else{
            alert("UserName is required")
        }
    }

    return(
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>LoginPage</h1>
            <label>UserName</label>
            <input type="text" value={userName} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <label>Password</label>
            <input type="password" value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>{checkLogin()}}>LOGIN</button>
            {/* <button onClick={()=>count=count+1}>updateCount</button>
            count is : {count}
            <button onClick={()=>setCounter((count)=>count+1)}>updateCounter</button>
            counter is : {counter} */}
        </div>
    )
}

export default LoginPage;
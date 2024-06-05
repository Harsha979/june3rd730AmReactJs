import React from "react";

function LoginPage(){
    var userName="besant";
    return(
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>LoginPage</h1>
            <label>UserName</label>
            <input type="text" value={userName}></input>
            <label>Password</label>
            <input type="text"></input>
        </div>
    )
}

export default LoginPage;
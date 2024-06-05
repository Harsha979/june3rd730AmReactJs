import React from "react";

function FirstComponent(){

    return(
        //html code
        <div>
            <h1>hello this is my FirstComponent</h1>
            <SecondComponent />
        </div>
    )
}

function SecondComponent(){

    return(
        <div>
            <h1>hello this is SecondComponent</h1>
        </div>
    )
}

export default FirstComponent;


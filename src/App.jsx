import { useState } from 'react';
import './App.css';
import LoginPage from './Components/Login';
import RegistrationPage from './Components/Registration';
import FirstComponent from './FirstComponent';

function App() {
  const [name,setName]=useState("Besant");
  return (
    <div className="App">
        <h1 style={{color:"red"}}>{name} this is first application</h1>
        <h2 className='header2'>{name} this is second header</h2>
        <FirstComponent propsName={name} />
        <button onClick={()=>{setName("Organization")}}>update name</button>
        <RegistrationPage/>
    </div>
  );
}

export default App;

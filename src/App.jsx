import { useState } from 'react';
import './App.css';
import LoginPage from './Components/Login';
import RegistrationPage from './Components/Registration';
import FirstComponent from './FirstComponent';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  // const [name,setName]=useState("Besant");
  const navigate=useNavigate();
  return (
    <div className="App">
        {/* <h1 style={{color:"red"}}>{name} this is first application</h1>
        <h2 className='header2'>{name} this is second header</h2>
        <FirstComponent propsName={name} />
        <button onClick={()=>{setName("Organization")}}>update name</button>
        <RegistrationPage/> */}
        <h1>Main Page</h1>
        <button onClick={()=>{navigate("/login")}}>Login</button>
        <button onClick={()=>{navigate("/registration")}}>Register</button>
        <Link to="/login">Login</Link>
        <Link to="/registration">Register</Link>
    </div>
  );
}

export default App;

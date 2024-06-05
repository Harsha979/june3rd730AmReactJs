import './App.css';
import LoginPage from './Components/Login';
import FirstComponent from './FirstComponent';

function App() {
  return (
    <div className="App">
        <h1 style={{color:"red"}}> this is first application</h1>
        <h2 className='header2'> this is second header</h2>
        <FirstComponent/>
        <LoginPage />
    </div>
  );
}

export default App;

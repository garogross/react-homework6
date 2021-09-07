import './App.css';
import React, { useState } from 'react'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const loginHandler = (email, password,valid) => {
    setLoggedIn(valid)
  }
  const logoutHandler = () => {
    setLoggedIn(false)
  }
  return (
    <React.Fragment>
      {!loggedIn && <Login onLogin={loginHandler}/>}
      {loggedIn && <Home onLogout={logoutHandler}/>}

    </React.Fragment>
  );
}

export default App;

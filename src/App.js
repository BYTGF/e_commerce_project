import './App.css';
import React, { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/LoginPage';
import Login from './Pages/LoginPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  }

  // const isLoggedIn = (status) => {
  //   setIsLogin(status);
  //   console.log(status)
  // }


  return (
    <div >
      <div className="App">
        {loggedIn ? (
          <HomePage isLoggedIn={handleLogin} />
        ) : (
          <Login isLoggedIn={handleLogin}/>
        )}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import { makeStyles } from '@mui/material/styles';
// import { CssBaseline } from "@mui/material";

// const useStyle =  makeStyles(( theme ) => ({
//   root: {
//     minHeight: "100vh",
//     backgroundImage:'url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})',
//   }
// }));
// export default function() {
//   const classes = useStyle();
//   return(
//     <div className={classes.root}>
//     <CssBaseline/>
//     </div>
//   )
// }


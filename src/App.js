
import './App.css';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstProject from './Components/Images/FirstProject';
import { useState } from 'react';
import Alert from './Components/Alert';
import React, { Component } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
   
  }

  const toggleMode = (cls) => {

    removeBodyClasses();
    document.body.classList.add('bg-'+cls)

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0396FF';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "RANA - Dark Mode";
      setInterval(() => {
      // document.title = "RANA is Amazing Mode";
      }, 2000);
      setInterval(() => {
      // document.title = "Explore RANA Now";
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "RANA - Light Mode";
    }

  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={
            <>
              <Home />
            </>
          }>
          </Route>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/firstproject' element={
            <FirstProject showAlert={showAlert} heading="Text Counter,Word Counter,Remove Extra Spaces" mode={mode} />
          } />
          <Route exact path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;






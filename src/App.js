import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarinfo from './components/Navbarinfo';
import Textarea from './components/Textarea';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  // BrowserRouter as Router,start,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)

  }

  const clearmode=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }
  const togglemode = (cls) => {
    clearmode();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(31, 29, 29)'
      showalert("Successfuly switched to dark mode", 'success');
      document.title = "Text converter-Dark Mode"
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Use dark mode for better visualisation", 'warning')
      document.title = "Text converter"
    }
  }
  return (
    <>
      <Navbarinfo title='codewithsomu.com' mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          {/* <Route path="#" element={<Textarea mode={mode} showalert={showalert} />}></Route> */}
          <Route path="/" element={<Textarea mode={mode} showalert={showalert} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </div>

    </>
  );
}

export default App;

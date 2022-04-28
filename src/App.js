import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#05011a'
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title='Utpal-Utils' Contact='Contact us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below: " mode={mode} />}/>
          </Routes>
            <hr />
        </div>
      </Router>
    </>
  );
}
// export default App;
// rfc - import react with function


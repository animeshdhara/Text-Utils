// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#132945';
      setModeText('Disable Dark Mode');
      showAlert("Dark mode has been enabled", 'Success')
      document.title = "Text Utils Dark";
    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success')
      document.title = "Text Utils Light";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" modeType={mode} toggleMode={toggleMode} modeText={modeText} />

        <Alert alert={alert} />

        <div className="container">
        <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
      </div>
        {/* <div className='container'>
        <About/>
     </div> */}
        {/* <Routes>
          <Route path="/about" element={<About />} ></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>

      {/* <TextForm showAlert={showAlert} heading='Enter the text to Analyze below' mode={mode} />
      <About /> */}


      <Router>
        <Navbar About="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={Alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/" element={<TextForm />} /> 
            <Route exact path="about" element={<About />} />
          </Routes>
        </div>
      </Router>



    </>
  );
}

export default App;

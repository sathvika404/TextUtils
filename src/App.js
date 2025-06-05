
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import{
  BrowserRouter as Router,
  Link
}from "react-router-dom";
function App() {
    const[mode,setmode]=useState('light');
    const[alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
},1500);

    }
  const toggleMode=()=>{
    if(mode==='light'){
    setmode('dark')
  document.body.style.backgroundColor='#00008b';
   document.body.style.color = 'black';
   showAlert('Dark Mode has been enabled','success');
   document.title="TextUtils-DarkMode Enabled!!!"

}else{
      setmode('light');
        document.body.style.backgroundColor='white';
         document.body.style.color = 'white';
         showAlert('Light mode has been enabled','success')
            document.title="TextUtils-LightMode Enabled!!!"

    }

  }
  return (
  <><Router>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
  <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyse below" mode={mode} />} />
</Routes>

 
  </div></Router>
</>
  );
}

export default App;

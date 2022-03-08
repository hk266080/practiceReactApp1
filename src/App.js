import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import  {BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Alert from "./components/Alert";
import Contactus from "./components/Contactus";


function App() {
  const [mode,setMode] = useState('light');
  const [buttonName, setButtonName] = useState(<i className="fa fa-lightbulb-o"></i>);
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
   setAlert({
    msg:message,
    type:type
   });
   setTimeout(() => {
     setAlert(null);
   }, 1000);
  }
  const modeHandler = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      setButtonName(<i className="fa fa-lightbulb-o"></i>);
      document.body.style.backgroundColor ="#03032D";
      document.title= "APP-Dark Mode";
      showAlert("Dark mode activated","success")
    }
    else 
    {
      setMode('light');
      setButtonName(<i className="fa fa-lightbulb-o"></i>);
      document.body.style.backgroundColor ="white";
      document.title= "APP-Light Mode";
      showAlert("Light mode activated","success")
    }
  }
  return (
   <>
     <BrowserRouter>
   <Navbar logo="My First App" mode={mode} about="About Us"/>
    
   <button className="btn btn-primary" onClick={modeHandler}>{buttonName}</button>
   <Alert alert={alert}/>

   
    <Routes>
    <Route path="/" element={<Textform mode={mode} alert={showAlert}  heading="Fill Below" place="Enter text here....."/>} />
      <Route path="/about" element={<About mode={mode}/>} />
      <Route path="/contact" element={<Contactus mode={mode}/>} />
    </Routes>
  </BrowserRouter>,
   </>
  );
}

export default App;

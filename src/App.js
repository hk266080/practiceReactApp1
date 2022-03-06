import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import  {BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";


function App() {
  const [mode,setMode] = useState('light');
  const [buttonName, setButtonName] = useState(<i className="fa fa-lightbulb-o"></i>);

  const modeHandler = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      setButtonName(<i className="fa fa-lightbulb-o"></i>);
      document.body.style.backgroundColor ="#03032D";
    }
    else 
    {
      setMode('light');
      setButtonName(<i className="fa fa-lightbulb-o"></i>);
      document.body.style.backgroundColor ="white";
    }
  }
  return (
   <>
   <Navbar logo="My First App" mode={mode} about="About Us"/>
   <button className="btn btn-primary" onClick={modeHandler}>{buttonName}</button>

     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Textform mode={mode} heading="Fill Below" place="Enter text here....."/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>,
   </>
  );
}

export default App;

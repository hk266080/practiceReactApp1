import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyTyle] = useState({
      color: "black",
      backgroundColor:'white'
    });
    const [buttonName, setButtonName] = useState("Enable Dark Theme")
    const darkThemehandler = ()=> {
        if(myStyle.color==='black'){
        setMyTyle({
            color: "white",
            backgroundColor:'black',
        });
        setButtonName('Enbale White Theme');
    }
        else {
            setMyTyle({
                color: "black",
                backgroundColor:'white',
            });
            setButtonName('Enbale Dark Theme');

        }
    }

   
  return (
    <div className='container' style={myStyle}>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingOne" style={myStyle}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          About 
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <strong>This is my first ever application</strong> 
          <p>I have created this application for practice purposes this application might have a lot of errors i will try to improve it more as i will keep learning react my master in the technology will increase.</p>
          <p>I want you all to support me on my this journey of creating more applications like this.</p>
          <p>You can suggest me more functionalities to add in this application at <span className='fw-bold'>hassan11903@hotmail.com</span></p>
        </div>
      </div>
    </div>
    
    <button className='btn btn-primary' onClick={darkThemehandler}>{buttonName}</button>
  </div>
  </div>
  )
}

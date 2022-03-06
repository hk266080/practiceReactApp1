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
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body" style={myStyle}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    
    <button className='btn btn-primary' onClick={darkThemehandler}>{buttonName}</button>
  </div>
  </div>
  )
}

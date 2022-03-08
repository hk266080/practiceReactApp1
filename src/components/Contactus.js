import React from 'react'
import pic from "../developer.jpg"
export default function Contactus(props) {
    
  return (
      <div className='mt-5 px-5'>
        <div className="card" style={{width: "18rem",backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
        <img src={pic} alt="ALi Hassan"/>
        <div className="card-body">
        <p className="card-text">This aplication was created by ALi Hassan. I am a full stact devloper and have a lot expierence in web development </p>
        </div>
        </div>
        </div>
  )
}

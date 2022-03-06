
import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        
        setText(text.toUpperCase());
    }
    const handleOnChange = (event)=>
    {
      setText(event.target.value);
    }
    const handelRemove = ()=>
    {
        setText('');
    }
    const handleLower = () => {
        setText(text.toLowerCase())
    }
    const remospecialChracter = ()=>{
        
        let str = text;
        str.replace(/[^a-zA-Z ]/g, "");
        setText(str.replace(/[^a-zA-Z ]/g, ""));
        
    }
    
  return (
      <>
    <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control " placeholder={props.place} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="col-8">
            <button className="btn btn-primary" onClick={handleUpClick}>Conver to Upper Case</button> -
            <button className="btn btn-primary" onClick={handleLower}>Covert to lower</button> - 
            <button className="btn btn-primary" onClick={remospecialChracter}>Remove Special Chracter</button> -  
            <button className="btn btn-danger" onClick={handelRemove}>Remove</button> -
            

            
            </div>
        </form>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p className="fw-bold">Words {text.split(" ").length-1} and Chracter {text.length}</p>
        <p className="fw-bold">Time Reauire to Read {0.08*(text.split(" ").length-1)} m</p>
        <h2>Preview</h2>
        {text}
    </div>
</>
  )
}

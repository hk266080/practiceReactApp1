
import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        
        setText(text.toUpperCase());
        props.alert("Converted to upper case","success");
    }
    const handleOnChange = (event)=>
    {
      setText(event.target.value);
    }
    const handelRemove = ()=>
    {
        setText('');
        props.alert("All text removed","danger");
    }
    const handleLower = () => {
        setText(text.toLowerCase())
        props.alert("All text converted to lower case","success");
    }
    const remospecialChracter = ()=>{
        
        let str = text;
        str.replace(/[^a-zA-Z ]/g, "");
        setText(str.replace(/[^a-zA-Z ]/g, ""));
        props.alert("Special Chracteres removed","success");
        
    }
      
     
      
    
  return (
      <>
    <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
            <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading} </h1>
            <div className="form-group">
                <textarea style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}} className="form-control " placeholder={props.place} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="col-8">
            <button className="btn btn-primary " onClick={handleUpClick}>Conver to Upper Case</button> -
            <button className="btn btn-primary mt-2 " onClick={handleLower}>Covert to lower</button> - 
            <button className="btn btn-primary mt-2" onClick={remospecialChracter}>Remove Special Chracter</button> -  
            <button className="btn btn-danger mt-2" onClick={handelRemove}>Remove</button> -
            

            
            </div>
        </form>
    </div>
    <div className="container my-2">
        <h1 style={{color: props.mode==='light'?'black':'white'}}>Your text summary</h1>
        <p style={{color: props.mode==='light'?'black':'white'}} className="fw-bold">Words {text.split(" ").length-1} and Chracter {text.length}</p>
        <p style={{color: props.mode==='light'?'black':'white'}} className="fw-bold">Time Reauire to Read {0.08*(text.split(" ").length-1)} m</p>
        <h2 style={{color: props.mode==='light'?'black':'white'}}>Preview</h2>
        <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter above to get preview"}</p>
    </div>
</>
  )
}


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
  return (
<div>
        <form onSubmit={(e) => e.preventDefault()}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" placeholder={props.place} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Conver to Upper Case</button>-
            <button className="btn btn-danger" onClick={handelRemove}>Remove</button>
        </form>
</div>
  )
}

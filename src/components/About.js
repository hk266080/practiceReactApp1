

export default function About(props) {
    
   
  return (
    <div className='container' style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
    <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
    <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
      <h2 className="accordion-header" id="headingOne" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
          About 
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
        <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#03032D',color: props.mode==='light'?'black':'white'}}>
          <strong>This is my first ever application</strong> 
          <p>I have created this application for practice purposes this application might have a lot of errors i will try to improve it more as i will keep learning react my master in the technology will increase.</p>
          <p>I want you all to support me on my this journey of creating more applications like this.</p>
          <p>You can suggest me more functionalities to add in this application at <span className='fw-bold'>hassan11903@hotmail.com</span></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

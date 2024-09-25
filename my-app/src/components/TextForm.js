 import React, {useState} from 'react'
 
 export default function TextForm(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked + text");
      let newText = text.toUpperCase();
      setText(newText)
     props.showAlert("converted to Uppercase", "Success");
    }
      const handleloClick = ()=>{
        // console.log("Uppercase was clicked + text");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase", "Success");
    }
    const handleclearclick = ()=>{
      // console.log("Uppercase was clicked + text");
      let newText = '';
      setText(newText)
      props.showAlert("Text Clear!", "Success");
    }
    const handleOnChange= (event)=>{
      // console.log("on Change");
      setText(event.target.value);
    }
 
    const [text, setText] = useState('Enter text here');

   return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'White':'#042743'}}>
    <h1>{props.heading}</h1>   
<div className="mb-3"> 
  <textarea className="form-control" value={text}
  onChange={handleOnChange} style={{backgroundcolor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'White':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
     </div>
     <div className="container my-2"  style={{color:props.mode==='dark'?'White':'#042743'}}>
      <h1> Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
     </>

   )
  }

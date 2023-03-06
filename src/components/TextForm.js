import React, {useState} from 'react'



export default function TextForm() {
 const [text,setText]=useState("");
  const handleChange=(event)=>{
       setText(event.target.value);
       console.log("printed1");
  }

  const handleUpClick=()=>{
    let newT=text.toUpperCase();
    setText(newT);
  }

  
  return (

    <div className="container">
      <h1>Enter Your Text Here</h1>
      <textarea className="form-control" onChange={handleChange} value={text} id="floatingTextarea"></textarea>
      <button className="btn btn-primary my-5 mx-3" onClick={handleUpClick} >To Upper Case</button>
  
    </div>
  )
  
}

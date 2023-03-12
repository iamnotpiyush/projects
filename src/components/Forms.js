
import React,{useState} from 'react'

export default function Forms(props) {
  const handleUpClick=()=>{
         console.log("text-changed")
         let newTxt=text.toUpperCase();
         SetText(newTxt)
         props.showAlert("text changde to upper case","success")

  }
  const clear=()=>{
    console.log("text-changed")
    let newTxt="";
    SetText(newTxt)
    props.showAlert("text clered","success")
}
 
  
  const handleLoClick=()=>{
    console.log("text-changed")
    let newTxt=text.toLowerCase();
    SetText(newTxt)
}

  const handleOnChange=(event)=>{
    console.log("on-change")
    SetText(event.target.value)
    
  }

  const[text,SetText]=useState("enter thee text")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <label htmlFor="mybox" className="form-label" >Textarea</label>
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',
        color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
     </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
   </div>
   <div style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text-Summary</h2>
    <p> {text.split(" ").length} words and {text.length} charachters</p>
    <p>{text.length>0?text:"enter somethign to preview text"}</p>
   </div>
   </>
  )
}
  
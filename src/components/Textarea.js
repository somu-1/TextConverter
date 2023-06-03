import React, { useState } from 'react'

export default function Textarea(props) {
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const handleonclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to UPPER CASE",'success')
    }
    const handleloclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to LOWER CASE",'success')
    }
    const handleclearclick=()=>{
        let newtext='';
        setText(newtext)
        props.showalert("Cleared the content",'success')
    }
    
    const handlecopyclick=()=>{
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Content copied to clipboard",'success')
    }
    const[text,setText]=useState("");
    return (
        <>
        <div className='container'style={{color:props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">Text Converter- Word counter | Character counter</label>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#322d2d':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="5"></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-3 " onClick={handleonclick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleloclick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3  " onClick={handleclearclick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2  " onClick={handlecopyclick}>Copy Text</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Content Structure</h1>
            <p>{text.split(/\s+/).length-1} words {text.length} characters</p>
            <p>Read in {.008*(text.split(' ').length-1)} mins</p>
            <h2>Preview </h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

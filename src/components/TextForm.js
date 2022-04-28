import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const ClrTxt = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Your text has been removed", "success");
    }
    const handleCopy = ()=>{
        // var text = document.getElementById("myBox");
        // text.select();
        // document.getSelection().removeAllRanges(); //text is selected after copying(use this to avoid)
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text); //Option of commented code
        props.showAlert("Your text has been copied", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div>
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'rgb(16 10 48)', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
                <button className='btn btn-primary my-1 mx-1' disabled={text.length===0} onClick={handleUpClick}>Convert UpperCase</button>
                <button className='btn btn-primary my-1 mx-1' disabled={text.length===0} onClick={handleDownClick}>Convert LowerCase</button>
                <button className='btn btn-primary my-1 mx-1' disabled={text.length===0} onClick={ClrTxt}>Clear Text</button>
                <button className='btn btn-primary my-1 mx-1' disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary my-1 mx-1' disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>

            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>

            <p>{0.008* text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to read</p>

            <h3>Preview</h3>

            <p>{text.length>0?text:"Enter text to preview it here: "}</p>
        </div>
        </>
    )
}
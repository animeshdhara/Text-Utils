import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('');

    //This function used for convert the text into upper case.
    const handleUpClick= ()=>{
        const newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Text converted to upper case","Success"
        )
    }

    //This function used for changing the text into lower case.
    const handleLowerClick = ()=>{
        const newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case","Success"
        )
    }

    //This function used for changing the text of the textarea dynamically when any changes occured in the text area.
    const handleUpChange= (event)=>{
        setText(event.target.value)
    }

    //Use for clear text from textarea.
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Cleared text","Success"
        )
    }

    //Use for copy a text to clipboard.
    const handleCopyClick = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard",
        'Success');
    }
    // setText("New text here") //To change the value of the text.
  return (
    <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className='form-control' id="myBox" cols="30" rows="10" value = {text} onChange={handleUpChange} style={{backgroundColor: props.mode ==='dark'?'#293340':'white',
            color:props.mode ==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 " onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container my-3 " style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>Total words : {text.length === 0?0:text.trim().split(" ").length}, and total characters : {text.length}</p>
        </div>
        <div className="container my-3 " style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

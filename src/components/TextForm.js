import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('Upper case was clicked'+text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!",'success');
    }
    const handleUp=()=>{
        setText('');
                props.showAlert("Previous Text has been Cleared succesfully!!",'success');

    }
    const handleUpClicking=()=>{
        console.log("lowerCase was clicked"+text);
        let king=text.toLowerCase();
        setText(king);
                props.showAlert("Converted to LowerCase!",'success');

    }
    const handle=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecopy=()=>{
      console.log('I am copy');
      var text =document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value)
              props.showAlert("Text Copied to Clipboard",'success');

    }
    const handleSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
              props.showAlert("Extra Spaces has been Removed succesfully!",'success');

    }
    const [text, setText]=useState('');
  return (
   
    <> <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handle} style={{backgroundColor:props.mode==='dark'?'white':'black' ,color:props.mode==='dark'?'black':'white'}}  rows="8" ></textarea>
      </div>
      <div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
      
      <button className="btn btn-warning mx-2" onClick={handleUpClicking}>Convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleUp}>Clear Text</button>
              <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy</button>
                            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra spaces</button>


      </div></div>
      <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}><h2>Your Text Summmary</h2>
      <p>{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008*text.length} Minutes of time is required to read</p></div>
      <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something in the above textbox to preview it here."}</p>
    </>
    
   
  );
}

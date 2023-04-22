    import React, {useState} from 'react'

    function TextForm(props) {
        const[text, setText] = useState('')

    
        const  handleUpClicked=()=>{
            console.log("uppercase was clicked"+ text);
            let newtext = text.toUpperCase();
            setText(newtext)
            // props.showAlert("converted to Upper case", "success")
        }

        const handleLoClicked=()=>{
            console.log("lowercase was clicked"+ text);
            let newtext = text.toLowerCase();
            setText(newtext)
            // props.showAlert("converted to lower case", "success")
        }
        // const handleCapitalize=()=>{
        //     console.log("Capitalize was clicked"+ text);
        //     let newtext = text.split(' ').map(word=>{
        //         return word.charAt(0).toUpperCase()+word.slice(1);
        //         // join (' ');
        //     })
            
        //     setText(newtext)
        // }
  
      
        
        const handleClear=()=>{
            console.log("clear was clicked"+ text);
            let newtext = '';
            setText(newtext)
            // props.showAlert("clear all the data", "success")
        }

        const handleExtraSpace=()=>{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "))
            // props.showAlert("Extra space is removed", "success")

        }
        const  handleOnChange=(e)=>{
            console.log("on change")
            setText(e.target.value)
        }
        return (
            <div className='container'>
            <div className='container' style={{Color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', Color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClicked}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLoClicked}>Convert To lowercase</button>
                {/* <button className='btn btn-primary mx-1 my-1' onClick={handleCapitalize}>Convert To Capitalize</button> */}
                <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}> Remove Extra Space</button>
                </div>
                <div className='container my-3' style={{Color: props.mode==='dark'?'white':'#042743'}}>
                    <h1>Your Text Summary   </h1>
                    <p>{text.split(" ").filter((element)=>{return element.length !=0 }).length} words and {text.length} character</p>
                    <p>{.008*text.split(" ").filter((element)=>{return element.length !=0 }).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0? text:"Enter something in textbox"}</p>
                </div>
            </div>
        )
    }

    export default TextForm

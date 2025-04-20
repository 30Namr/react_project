import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function FirstProject(props) {

    const handleUpClick = () => {
        // console.log('handleUpClick' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowerClick = () => {
        // console.log('handleUpClick' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Converted to Clear Text","success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Converted to Copy","success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log('handleOnChange');
        setText(event.target.value);
        props.showAlert("Converted to Extra Spaces","success");
    }
    const [text, setText] = useState('Enter The Text Here');

    // text =  "new text" wrong way to change the state
    // setText("new text");//correct way to change the state
    return (
        <div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'dark' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <Form>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'dark' }}></textarea>
                    </div>
                    <Button disabled={text.length===0} variant="secondary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</Button>
                    <Button disabled={text.length===0} variant="secondary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</Button>
                    <Button disabled={text.length===0} variant="secondary mx-1 my-1" onClick={handleClearClick}>Clear Text</Button>
                    <Button disabled={text.length===0} variant="secondary mx-1 my-1" onClick={handleCopy}>Copy</Button>
                    <Button disabled={text.length===0} variant="secondary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</Button>
                    <footer>
                        <br />
                        <h5>Your Text Summary</h5>
                        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} Words and {text.length} Characters</p>
                        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0;}).length} Minutes Read</p>
                        <h6>Preview</h6>
                        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                    </footer>
                </Form>
            </div>
        </div>
    )
}

export default FirstProject
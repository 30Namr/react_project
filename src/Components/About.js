import React, { useState } from 'react';
import { Container } from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
    let myStyle = {
        color:props.mode === 'dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'#0396FF':'white',        
    }

    return (
        <div >
            <div className='container' fluid='md'>
                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" fdprocessedid="bz04v">
                                Analyze Your Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Rana</strong> give you a way to analyze and <code>efficiently</code>.Be it word count character count or
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" fdprocessedid="w7bqq4">
                               Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Rana is a free character counter tool that provides instant character count & words count statistics.</strong> for  a given text.<code>.
                                    Rana reports the number of words and character</code>Thus it is suitable for writing text with word / character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" fdprocessedid="wqf62r">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This word counter software works in any web browsers such as chrome.</strong> <code> 
                                FireFox , Internet Explorer , Safai, opera</code>it suits to count characters in facebook , blog , excel  document , pdf document , eassays , etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
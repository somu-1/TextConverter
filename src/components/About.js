import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
export default function About() {
    const [myStyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white'

    })

    let toggletheme = () => {
        if (myStyle.color == 'white') {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable light mode');
        }else{
            setmystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText('Enable dark mode');

        }
    }

    const [btnText,setbtnText]=useState('Enable dark mode')

    return (
        <div className='container' style={myStyle}>
            <h2>About us</h2>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" style={myStyle}>
                    <Accordion.Header style={myStyle}>Accordion Item #1</Accordion.Header>
                    <Accordion.Body >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="container">
                <button type='button' onClick={toggletheme} className='btn btn-primary my-3'>{btnText}</button>
            </div>
        </div>
    )
}

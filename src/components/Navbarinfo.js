import React from 'react'
// import { Navbar, Nav, NavDropdow } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { propTypes } from 'react-bootstrap/esm/Image';
// import Form from 'react-bootstrap/Form';

export default function Navbarinfo(props) {
  return (
    <>

      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div> 
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
        <div className="d-flex">
          <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
        <div className="d-flex">
          <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
        <div className="d-flex">
          <div className="bg-light rounded mx-2" onClick={()=>{props.togglemode('light')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
        <div className="d-flex">
          <div className="bg-dark rounded mx-2" onClick={()=>{props.togglemode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
        </div>
        {/* <div className={`form-check  form-switch text-${props.mode === 'light' ? 'black' : 'white'}`} >
          <input className="form-check-input my-3" type="checkbox" role="switch"  style={{cursor:'pointer'}} onClick={()=>{props.togglemode(null)}} id="flexSwitchCheckChecked" />
            <label className="form-check-label mx-1" htmlfor="flexSwitchCheckChecked">Enable Dark Mode </label>
        </div> */}
      </nav>
    </>
  )
}

propTypes.Navbarinfo = {
  title: propTypes.String,

}

Navbarinfo.defaultProps = {
  title: "Somu",
}
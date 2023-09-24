import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      {/* <Link className="navbar-brand" href="/">Navbar</Link> */}
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li> */}
        </ul>
        
        <div className="form-check form-switch" onClick={props.toggleMode}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.modeType === 'dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
          </div>
      </div>
    </div>
  </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here"
}
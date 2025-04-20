import React from 'react'
import PropTypes from 'prop-types'
import Images from './Images/logo.png';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import Home from './Home';
import About from './About';

function Navbar(props) {
    return (

        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">

                    <NavLink className="navbar-brand" to='/'>
                        <img src={Images} alt="" className='logo' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/about'>About Us</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to='/firstproject'>First Project</NavLink></li>
                                    <li><a className="dropdown-item" href="#">Second Project</a></li>
                                    <li><a className="dropdown-item" href="#">Third Project</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/product'>Product</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        </div>
                    </div>
                </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                        </div>
                
              
            </nav >

        </div >
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title:'Set Title Here',
//     aboutUs:'About Text Here',
// };

export default Navbar
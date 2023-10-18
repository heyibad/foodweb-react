import React from 'react'
import img2 from "../../images/rfc.png" 

import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <>
        
        <header className="header-main">
        
        <nav className="navbar navbar-expand-lg bg-light fixed-top tmb-2">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="{img2}" className="logo" alt="Food"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
                 
             <i className="fa fa-stream
             navbar-toggler-icon"></i>
                </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <NavLink   className="nav-link active" aria-current="page" to={""}><i className="fa-sharp fa-solid fa-house-chimney"></i>HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/menu"}><i className="fa-solid fa-circle-chevron-down"></i>MENU</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link"to={"/contact"}><i className="fa-solid fa-envelope"></i>CONTACT</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/faq"}><i className="fa-solid fa-quote-left"></i>FAQ'S</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
        </header>
        
        </>
          )
}

export default Header
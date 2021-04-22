import CartWidget from './CartWidget'
import "./NavBar.css"
import {Link,NavLink} from "react-router-dom";
import React, { useState } from 'react';



function Navbar() {
  const [isOpen,setisOpen] = useState(true)

  return (
    <div className="Navbar-container">
      <div className={isOpen ? 'Navbar-backdrop':'Navbar-backdrop openB'} onClick={(e)=>setisOpen(true)}></div>
      <nav className="Navbar">
        <div className="Navbar-icon">
          <Link to="/">
            <img className="Navbar-icon-img" src={process.env.PUBLIC_URL+"/img/venus.png"} alt="Embroidery"/>
            <p>
              Venus
              <br/>
              Embroidery
            </p>
          </Link>
        </div>
        <nav className="Navbar-menu-open">
          <ul className="Navbar-menu-open-list">
            <li className="Navbar-menu-open-list-item">
              <NavLink className="Navbar-menu-open-list-item-link" exact to="/">Inicio</NavLink>
            </li>
            <li className="Navbar-menu-open-list-item">
              <NavLink className="Navbar-menu-open-list-item-link" to="/products">Productos</NavLink>
            </li>
            <li className="Navbar-menu-open-list-item">
              <NavLink className="Navbar-menu-open-list-item-link" to="/personalize">Personalizá</NavLink>
            </li>
            <li className="Navbar-menu-open-list-item">
              <NavLink className="Navbar-menu-open-list-item-link" to="/size">Tabla de talles</NavLink>
            </li>
            <li className="Navbar-menu-open-list-item">
              <NavLink className="Navbar-menu-open-list-item-link" to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
        <div className="Navbar-menu-container">
                <button className="Navbar-menu-buttom" onClick={e=>setisOpen(false)}>
                    <img src={process.env.PUBLIC_URL+"/img/lista.png"}  className="logo-menu" alt="gray"></img>
                </button>
        </div>
      </nav>
      <nav className={isOpen ? 'header-Navbar-menu-hidden':'header-Navbar-menu-hidden open'}>
                <div className="Navbar-menu-logo">
                    <button className="Navbar-menu-button" onClick={(e)=>setisOpen(true)}>
                        <span className="Navbar-menu-button-text">X</span>
                    </button>
                </div>
                <div className="Navbar-menu-container-list">
                <ul className="Navbar-menu-hiden-list">
                  <li className="Navbar-menu-hiden-list-item">
                    <NavLink className="Navbar-menu-hiden-list-item-link" exact to="/"  activeClassName="active" onClick={(e)=>setisOpen(true)}>Inicio</NavLink>
                  </li>
                  <li className="Navbar-menu-hiden-list-item">
                    <NavLink className="Navbar-menu-hiden-list-item-link" to="/products" activeClassName="active" onClick={(e)=>setisOpen(true)}>Productos</NavLink>
                  </li>
                  <li className="Navbar-menu-hiden-list-item">
                    <NavLink className="Navbar-menu-hiden-list-item-link" to="/personalize" activeClassName="active" onClick={(e)=>setisOpen(true)}>Personalizá</NavLink>
                  </li>
                  <li className="Navbar-menu-hiden-list-item">
                    <NavLink className="Navbar-menu-hiden-list-item-link" to="/size" activeClassName="active" onClick={(e)=>setisOpen(true)}>Tabla de talles</NavLink>
                  </li>
                  <li className="Navbar-menu-hiden-list-item">
                    <NavLink className="Navbar-menu-hiden-list-item-link" to="/contact" activeClassName="active" onClick={(e)=>setisOpen(true)}>Contacto</NavLink>
                  </li>
                </ul>
                </div>
            </nav>
    </div>
  );
}

export default Navbar;

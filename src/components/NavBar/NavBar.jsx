import React from 'react';
import './NavBar.css'
import logo1 from './logo1.jpg'

function NavBar(props) {
    return (
        <>
        <div className='nav'>
            <a className='nav__brand' href="#"><img className='nav__logo' src={logo1} alt="(LOGO)" /><h1>{props.title}</h1></a>
            <ul className='nav__list'>
                <li><a className='nav__item' href="#">Productos</a></li>
                <li><a className='nav__item' href="#">Nosotros</a></li>
                <li><a className='nav__item' href="#">Contacto</a></li>
            </ul>
        </div>
            <p className='nav__item'>
               Bienvenidos a {props.title}
            </p>
            </>
    );
}
export default NavBar;
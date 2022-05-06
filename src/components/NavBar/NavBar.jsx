import React from 'react';
import './NavBar.css'
import logo1 from './logo1.jpg';
import { NavLink } from 'react-router-dom';

const NavBar = ({title, children}) => {
    
    return (
        <>
            <div className='nav sticky-top bg-light'>
                <NavLink className='nav__brand' to='/'><img className='nav__logo' src={logo1} alt="LOGO" /><h1>{title}</h1></NavLink>
                
                <ul className='nav__list'>
                    <li><NavLink className={nav => nav.isActive ? 'nav__active nav__item' : 'nav__item'} to='/category/Especiales'>Especiales</NavLink></li>
                    <li><NavLink className={nav => nav.isActive ? 'nav__active nav__item' : 'nav__item'} to='/category/Packs'>Packs</NavLink></li>
                    <li><NavLink className={nav => nav.isActive ? 'nav__active nav__item' : 'nav__item'} to='/category/Combinados'>Combinados</NavLink></li>
                </ul>
                {children}
            </div>
            
         </>
    );
}
export default NavBar;
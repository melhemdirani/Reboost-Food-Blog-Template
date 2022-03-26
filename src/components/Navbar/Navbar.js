import React from 'react';
import { ImTwitter, ImDribbble, ImBehance, ImLinkedin2, ImFacebook, ImSearch, ImMenu } from 'react-icons/im'
import { BsPinterest } from 'react-icons/bs'

import './Navbar.styles.scss';
import navImg from '../../assets/images/nav-img.jpg'

export default function Navbar() {
    return (
        <div className='Navbar_Container'>
            <nav>
                <div>
                    <div className='navbar_img'>
                        <img src={navImg} alt='navbarImage' />
                        <div className='navbar-top'>
                            <div className='navbar-icons'>
                                <BsPinterest id="pinterest" />
                                {/* mr : margin right */}
                                <ImFacebook id="mr" />
                                <ImTwitter id="mr" />
                                <ImDribbble id="mr" />
                                <ImBehance id="mr" />
                                <ImLinkedin2 id="mr" />
                            </div>
                            <div className='navbar-search'>
                                <input type="text" name='search' placeholder='Search' size='40' />
                                <ImSearch id="search" />
                            </div>
                        </div>
                    </div>
                    <div className='navbar-header-text'>
                        <p className='navbar-header-text-p1'>Bueno</p>
                        <p className='navbar-header-text-p2'>Food Blog</p>
                    </div>
                    <div>
                        <ul>
                            <li id="menu" ><a href='#none'><ImMenu /></a></li>
                            <li id="home" ><a href="#home">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="#pages">Pages</a></li>
                            <li><a href="#recipes">Recipes</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li id="login" ><a href="#Login/Register" className='navbar-link-last'>Login/Register</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

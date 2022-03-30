import React from 'react';
import { ImTwitter, ImDribbble, ImBehance, ImLinkedin2, ImFacebook, ImSearch, ImMenu } from 'react-icons/im'
import { BsPinterest, FaSearch } from 'react-icons/bs';
import './Navbar.styles.scss';

export default function Navbar() {
    return (
        <div className='Navbar_Container'>
            <div className='header'>
                <div className='header-top'>
                    <div className='header-icons'>
                        <a href="/"><BsPinterest /></a>
                        <a href="/"><ImFacebook /></a>
                        <a href="/"><ImTwitter /></a>
                        <a href="/"><ImDribbble /></a>
                        <a href="/"><ImBehance /></a>
                        <a href="/"><ImLinkedin2 /></a>
                    </div>
                    <div className='navbar-search'>
                        <div className='search-bar'>
                            <input type="text" name='search' placeholder='Search' size="40" />
                            <button id="search"><ImSearch /></button>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className='navbar-header-text'>
                    <p className='navbar-header-text-p1'>Bueno</p>
                    <p className='navbar-header-text-p2'>Food Blog</p>
                </div>
                <div className='navbar'>
                    <ul>
                        <div>
                            <li id="menu" ><a href='#none'><ImMenu /></a></li>
                        </div>
                        <div>
                            <li id="home" ><a href="#home">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="#pages">Pages</a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><a href="/">Page 1</a></li>
                                        <li><a href="/">Page 2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#recipes">Recipes</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li id="login" ><a href="#Login/Register">Login/Register</a></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

import React from 'react';
import { ImPinterest2, ImTwitter, ImDribbble, ImBehance, ImLinkedin2, ImFacebook, ImSearch,ImMenu} from 'react-icons/im'

import './Navbar.styles.scss';
import navImg from './images/nav-img.jpg'

function Navbar() {
    return (
        <div className='Navbar_Container'>
        <nav>
           <div>
               <div className='navbar_img'>
                <img src = {navImg} alt = 'navbarImage'/>
                <div className='navbar-top'>
                 <div className='navbar-icons'>
                    <ImPinterest2 style={{marginRight : '20px', marginLeft : '110px'}}/>
                    <ImFacebook style={{ marginRight: '20px'}}/>
                    <ImTwitter style={{ marginRight: '20px' }}/>
                    <ImDribbble style={{ marginRight: '20px' }}/>
                    <ImBehance style={{ marginRight: '20px' }}/>
                    <ImLinkedin2 style={{ marginRight: '20px' }}/>
                </div>
               <div className='navbar-search'>
                   <p style = {{color : 'grey', marginRight : '14em', fontWeight : 'lighter'}}>Search</p> 
                   <ImSearch style = {{marginRight : '1em'}}/>
               </div>
            </div>
            </div>
               <div className='navbar-header-text'>
                    <p className='navbar-header-text-p1'>Bueno</p>
                    <p className='navbar-header-text-p2'>Food Blog</p> 
               </div>
               <div>
                    <div style={{paddingLeft : '7em'}}><ImMenu /></div>
                        
                   <ul>
                        <li style={{ paddingLeft: '30em'}}><a href="#home">Home</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#pages">Pages</a></li>
                        <li><a href="#recipes">Recipes</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li style={{ float:'right', paddingRight: '10em'}}><a href="#Login/Register" className='navbar-link-last'>Login/Register</a></li>
                   </ul>
               </div>

           </div> 
        </nav>
        </div>
    )
}

export default Navbar

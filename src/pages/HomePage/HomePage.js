import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../sections/Header/Header';
import Blog from '../../components/Blog/Blog'

import './HomePage.styles.scss';


function HomePage() {
    return (
        <div className='HomePage_Container'>
            <Navbar/>
            <Header/>    
            <Blog/>        
        </div>
    )
}

export default HomePage

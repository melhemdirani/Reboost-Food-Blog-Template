import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../sections/Header/Header';

import './HomePage.styles.scss';


function HomePage() {
    return (
        <div className='HomePage_Container'>
            <Navbar/>
            <Header/>            
        </div>
    )
}

export default HomePage

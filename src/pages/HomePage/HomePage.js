import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Blog from '../../components/Blog/Blog'

import './HomePage.styles.scss';
import Footer from '../../components/Blog/Footer/Footer';
// import Loader from '../../sections/loader/Loader';


function HomePage() {
    // state = {loading: true}
    // if (this.state.loading) return <Loader/>
    return (
        <div className='HomePage_Container'>
            {/* <Loader/> */}
            {/* <Navbar/>
            <Header/>     */}
            {/* <Blog/> */}
            <Footer /> 
        </div>
    )
}

export default HomePage

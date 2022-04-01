import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Blog from '../../components/Blog/Blog'

import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import Gallery from '../../components/Gallery/Gallery';
// import Loader from '../../components/Loader/Loader';


function HomePage() {
    // state = {loading: true}
    // if (this.state.loading) return <Loader/>
    return (
        <div className='Homepage_Container'>
            {/* <Loader /> */}
            <Navbar />
            <Header />
            <Post />
            <Blog />
            {/* <Gallery /> */}
            <Footer />
        </div>
    )
}

export default HomePage

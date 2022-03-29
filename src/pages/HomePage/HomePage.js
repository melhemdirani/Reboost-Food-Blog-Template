import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Blog from '../../components/Blog/Blog'

import './HomePage.styles.scss';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
// import Loader from '../../sections/loader/Loader';


function HomePage() {
    // state = {loading: true}
    // if (this.state.loading) return <Loader/>
    return (
        <div className='HomePage_Container'>
            <div>
                {/* <Loader /> */}
                <Navbar />
                <Header />
                <Post />
                <Blog />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage

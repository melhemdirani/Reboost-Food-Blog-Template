import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Blog from '../../components/Blog/Blog'

import './HomePage.styles.scss';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import Gallery from '../../components/Gallery/Gallery';
// import Loader from '../../sections/loader/Loader';


function HomePage() {
    // state = {loading: true}
    // if (this.state.loading) return <Loader/>
    return (
        <div className='Homepage_Container'>
            <Navbar />
            <div className="Parent">
                <div className="max-width">
                    {/* <Header /> */}
                    <Post />
                    <Blog />
                </div>
            </div>
            {/* <Gallery /> */}
            <div className="Parent">
                <div className="max-width">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage

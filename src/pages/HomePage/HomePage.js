import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import Gallery from '../../components/Gallery/Gallery';


export default function HomePage() {
    return (
        <div className='Homepage_Container'>
            <Navbar />
            <Header />
            <Post />
            <Blog />
            <Gallery />
            <Footer />
        </div>
    )
}


import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import Preloader from './components/Preloader/Preloader';
import Contact from "./pages/Contact/Contact";


export default function App() {
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 2500);
    // })

    return (
        <>
            {
                // isLoading === true ? <Preloader /> :
                <BrowserRouter>
                    <ScrollToTop smooth style={{backgroundColor: 'black', borderRadius: '50%'}} color="white" />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    );
}
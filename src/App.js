import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Preloader from './components/Preloader/Preloader';
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";


export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 2500);
    })

    return (
        <>
            {
                isLoading === false ? <Preloader /> :
                    <BrowserRouter>
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
import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Blog from "./pages/Blog/Blog";
import Preloader from './components/Preloader/Preloader';


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
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    );
}
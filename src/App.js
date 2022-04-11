import React , {useState , useEffect} from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Preloader from './components/Preloader/Preloader';

export default function App() {
    const [isLoading , setIsLoading] = useState(true);
    useEffect (() => {
        setTimeout(() => {
            setIsLoading(false)
        },2500);
    })
    return (
        <div className="App">
            {isLoading === true ?
            <Preloader/>:
            <HomePage /> 
            }
        </div>
    );
}
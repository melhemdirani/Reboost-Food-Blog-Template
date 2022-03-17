import React from 'react';

import './Header.styles.scss';
import healthyFood from '../../assets/images/f1.jpg';
import organicCuisine from '../../assets/images/f2.jpg';
import vegetarianFood from '../../assets/images/f3.jpg'

function Header() {
    const toggleImage = () =>{
        
    }
    return (
        <div>
            <div className='Header_Container'>
                <div className='Header_Container_div'>
                    <img onMouseOver={toggleImage} src={healthyFood} alt="healthy food" />
                        <div className= 'healthy'>
                        <h6>The best </h6>
                        <p>Healthy Food </p>
                        </div>
                </div>
                <div className='Header_Container_div'>
                    <img onMouseOver={toggleImage} src={organicCuisine} alt="organic cuisine" />
                    <div className='organic'>
                        <h6>The best </h6>
                        <p>Organic Cuisine </p>
                    </div>
                </div>
                <div className='Header_Container_div'>
                    <img onMouseOver={toggleImage} src={vegetarianFood} alt="vegetarian food" />
                    <div className='vegetarian'>
                        <h6>The best </h6>
                        <p>Vegetarian Food </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

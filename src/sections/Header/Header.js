import React from 'react';

import './Header.styles.scss';
import healthyFood from './images/f1.jpg';
import organicCuisine from './images/f2.jpg';
import vegetarianFood from './images/f3.jpg'

function Header() {
    return (
        <div>
            <div className='Header_Container'>
                <div className='Header_Container_div'>
                    <img src={healthyFood} alt="healthy food" />
                        <div className= 'healthy'>
                        <h6>The best </h6>
                        <p>Healthy Food </p>
                        </div>
                </div>
                <div className='Header_Container_div'>
                    <img src={organicCuisine} alt="organic cuisine" />
                    <div className='organic'>
                        <h6>The best </h6>
                        <p>Organic Cuisine </p>
                    </div>
                </div>
                <div className='Header_Container_div'>
                    <img src={vegetarianFood} alt="vegetarian food" />
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

import React from 'react'
import img1 from '../../assets/images/blogf1.jpg'
import img2 from '../../assets/images/blogf2.jpg'
import img3 from '../../assets/images/blogf3.jpg'
import img4 from '../../assets/images/blogf4.jpg'
import img5 from '../../assets/images/blogf5.jpg'
import img6 from '../../assets/images/blogf6.jpg'
import img7 from '../../assets/images/blogf7.jpg'
import img8 from '../../assets/images/blogf8.jpg'
import img9 from '../../assets/images/blogf9.jpg'
import img10 from '../../assets/images/blogf10.jpg'
import healthyFood from '../../assets/images/f1.jpg'

import './Blog.styles.scss'

const Blog = () =>{
    const paragraph =  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus, egestas tincidunt augue pellentesque. Suspendisse vestibulum sem in eros maximus, pretium commodo turpis convallis. Aenean scelerisque orci quis urna tempus, vitae interdum velit aliquet.</p>
    const paragraph2 = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus.</p>
    const best = <h5>the best</h5>
    const eggsWithHam = <h3>Friends egg with ham</h3>
    const date = <h6>july 11, 2018 / BY Julia Stiles</h6>
    const fries = <h3>Burger with fries</h3>
    return(
        <div>
        <div className='grid-container1'>
        <div>
            <img src={img1} alt="Friends egg with ham" />  
        </div>
        <div>
            <h5>healthy</h5>
            {eggsWithHam}
            {date}
            {paragraph}
            <button>Read more</button>
        </div>

        <div>
            {best}
            <h3>Steak with boiled vegetables</h3>
            {date}
            {paragraph}
            <button>Read more</button>
        </div>
        <div>
            <img src={img2} alt="Steak with boiled vegetables" />
        </div>   
        </div>

        <div className='grid-container2'>
        <div>
        <img src={img3} alt="just food" />
        <img src={img5} alt="just food" id='pt'/>
        <img src={img10} alt="just food" id='pt'/>
        </div>

        <div>
         <div id='ptt1'>
        {best}
        {eggsWithHam}
        {date}
        {paragraph2}
        </div>

        <div id='ptt'>
        {best}
        <h3>Mushrooms with pork chop</h3>
        {date}
        {paragraph2}
        </div>
        <div id='ptt'>
            {best}
            <h3>Birthday cake with chocolate</h3>
            {date}
            {paragraph2}
        </div>
        </div>
        
        <div>
        <div className='img4'>
        <img src={img4} alt="just food" id = "img4"/>
        <span>140X300</span>
        </div>

        <div>
            <div className='sideFood'>
            <img src={img6} alt="just food"/>
            {eggsWithHam}
            <p></p>
            {date}
            </div>
            <div className='sideFood'>
            <img src={img7} alt="just food"/>
            {fries}
            <p></p>
            {date}
            </div>
            <div className='sideFood'>
            <img src={img8} alt="just food"/>
            <h3>Avocado & Oisters</h3>
            <p></p>
            {date}
            </div>
            <div className='sideFood'>
            <img src={img9} alt="just food"/>
            <h3>Tortilla pawns</h3>
            <p></p>
            {date}
            </div>
            <div className='sideFood'>
            <img src={healthyFood} alt="just food"/>
            {fries}
            <p></p>
            {date}
            </div>
           
        </div>
        </div>
        
        </div>

        </div>
    )
}

export default Blog;                 
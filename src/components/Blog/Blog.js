import React from 'react'
import img1 from '../../assets/images/blogf1.jpg'
import img2 from '../../assets/images/blogf2.jpg'

import './Blog.styles.scss'

const Blog = () =>{

    return(
        <div>
        <div className='grid-container'>
        <div>
            <img src={img1} alt="Friends egg with ham" />  
        </div>
        <div>
            <h5>healthy</h5>
            <h3>Friends egg with ham</h3>
            <h6>july 11, 2018 / BY Julia Stiles</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus, egestas tincidunt augue pellentesque. Suspendisse vestibulum sem in eros maximus, pretium commodo turpis convallis. Aenean scelerisque orci quis urna tempus, vitae interdum velit aliquet.</p>
            <button>Read more</button>
        </div>

        <div>
            <h5>the best</h5>
            <h3>Steak with boiled vegetables</h3>
            <h6>july 11, 2018 / BY Julia Stiles</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus, egestas tincidunt augue pellentesque. Suspendisse vestibulum sem in eros maximus, pretium commodo turpis convallis. Aenean scelerisque orci quis urna tempus, vitae interdum velit aliquet.</p>
            <button>Read more</button>
        </div>
        <div>
            <img src={img2} alt="Steak with boiled vegetables" />
        </div>
            
        </div>
        </div>
    )
}

export default Blog;
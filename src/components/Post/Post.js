import React from 'react'
import img1 from '../../assets/images/blogf1.jpg'
import img2 from '../../assets/images/blogf2.jpg'

import './Post.styles.scss';
import { paragraph, best, eggsWithHam, date } from './fakeData';


export default function Post() {
    return (
        <center>
            <div className='Post_Container'>

                {/* Row-01 */}
                <section>
                    <div className="image-container">
                        <img src={img1} alt="Friends egg with ham" />
                    </div>
                    <div className="details">
                        <h5>healthy</h5>
                        {eggsWithHam}
                        {date}
                        {paragraph}
                        <button>Read more</button>
                    </div>
                </section>
                
                {/* Row-02 */}
                <section>
                    <div className="details">
                        {best}
                        <h3>Steak with boiled vegetables</h3>
                        {date}
                        {paragraph}
                        <button>Read more</button>
                    </div>
                    <div className="image-container">
                        <img src={img2} alt="Steak with boiled vegetables" />
                    </div>
                </section>
            </div>
        </center>
    )
}


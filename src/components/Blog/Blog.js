import { Data, Data2 } from './FakeData';
import img4 from '../../assets/images/blogf4.jpg';

import "./Blog.styles.scss";

export default function NewBlog() {
    return (
        <div className="Blog_Container">
            <div className="Container">

                {/* Left Main Container */}
                <section className="Left-Container">
                    {Data.map(data => (
                        <div className="card-left-parent">
                            <div className="left-portion">
                                <img src={data.img} alt="img" />
                            </div>
                            <div className="right-portion">
                                <h5>{data.tag}</h5>
                                <h3>{data.title}</h3>
                                <h6>{data.date}</h6>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Sidebar */}
                <section className="Right-Container">
                    <div className='abs-div'>
                        <img src={img4} alt="img" />
                        <span>140X300</span>
                    </div>
                    <div className="cards">
                        {Data2.map(data => (
                            <div className='card-right-parent'>
                                <div className="left-portion">
                                    <img src={data.img} alt="img" />
                                </div>
                                <div className="right-portion">
                                    <h3>{data.title}</h3>
                                    <p></p>
                                    <h6>{data.date}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
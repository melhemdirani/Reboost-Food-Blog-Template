import { Data, Data2 } from './FakeData';
import img4 from '../../assets/images/blogf4.jpg';

import "./NewBlog.styles.scss";

export default function NewBlog() {
    return (
        <div className="parent">
            <div className="Container">

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
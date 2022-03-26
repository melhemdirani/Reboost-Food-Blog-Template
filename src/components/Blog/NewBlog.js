import { Data } from './FakeData';
import img4 from '../../assets/images/blogf4.jpg';
import img6 from '../../assets/images/blogf6.jpg';

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
                    <div>
                        <img src={img4} alt="img" />
                    </div>
                    <div className="cards">
                        <div className='card-right-parent'>


                            <div className="left-portion">
                                <img src={img6} alt="img" />
                            </div>
                            <div className="right-portion">
                                <h3>Avocado & Oisters</h3>
                                <p></p>
                                <h6>july 11, 2018 / BY Julia Stiles</h6>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
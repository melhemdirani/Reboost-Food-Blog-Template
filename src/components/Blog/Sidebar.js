import { Data2 } from './FakeData';
import img4 from '../../assets/images/blogf4.jpg';
import "./Blog.styles.scss";


export default function Sidebar() {
    return (
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
    );
};

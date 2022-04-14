import { Data } from './FakeData';
import img4 from '../../assets/images/blogf4.jpg';
import "./SideBar.scss";

export default function SideBar() {
    return (
        <>
            <div className="Blog-Sidebar">
                <section>
                    <img src={img4} alt="img" />
                    <span>140X300</span>
                </section>

                <section>
                    {Data.map(data => (
                        <div>
                            <section>
                                <img src={data.img} alt="img" />
                            </section>
                            <section>
                                <h3>{data.title}</h3>
                                <h6>{data.date}</h6>
                            </section>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
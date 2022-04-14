import { Data } from './FakeData';


export default function Body() {
    return (
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
    );
}
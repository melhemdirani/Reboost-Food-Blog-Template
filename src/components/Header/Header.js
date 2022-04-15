import { Data } from './FakeData';
import './Header.styles.scss';


export default function Header() {
    return (
        <center>
            <div className='Header_Container'>
                {
                    Data.map((data, index) => (
                        <main>
                            <img src={data.img} alt={index} />
                            <div className='absolute'>
                                <h6>{data.title}</h6>
                                <p>{data.text}</p>
                            </div>
                        </main>
                    ))
                }
            </div>
        </center>
    )
}


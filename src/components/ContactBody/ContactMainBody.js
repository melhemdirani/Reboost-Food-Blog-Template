import './ContactMainBody.scss';
import { MdShareLocation } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import {AiFillMessage} from 'react-icons/ai';

export default function ContactMainBody() {
    return (
        <>
            <div className="Contact-Main-Body">
                <div className="contact-cont">
                    <h3>We love seeing your feedback</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nihil reprehenderit non omnis, exercitationem eius, fuga incidunt eveniet aspernatur corporis, in architecto quis enim nemo. Nobis iusto porro esse in.</p>

                    <div className="map-section">
                        <div className="address">
                            <p> <MdShareLocation className='con-icons' /> 481 Creekside Lane Avila Beach, CA 931</p>
                            <p> <BsPhone className='con-icons' />+53 345 7953 32453</p>
                            <p> <AiFillMessage className='con-icons' /> yourmail@gmail.com</p>
                        </div>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6605.469628902282!2d36.024468574557744!3d34.12753810359446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518a9c3dd85d9c7%3A0x5f14246363fd15a!2sYammoune%2C%20Lebanon!5e0!3m2!1sen!2sbd!4v1650944227064!5m2!1sen!2sbd" width="450" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>  
        </>  
    );
}
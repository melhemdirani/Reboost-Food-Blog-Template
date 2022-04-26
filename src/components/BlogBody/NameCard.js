import { BsPinterest } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import "./NameCard.scss";


export default function NameCard() {
    const url = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg";
    return (
        <div className="NameCard">
            <section>
                <img src={url} alt="orange" />
                <p>My name is <span>Jessica Smith</span>,<br />I'm passionate cook with a love for vegan food.</p>
            </section>
            <section>
                <BsPinterest />
                <ImFacebook />
                <BsTwitter />
            </section>
        </div>
    );
}
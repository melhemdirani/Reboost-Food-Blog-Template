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

                <i class="fa-brands fa-pinterest"></i>

            </section>
        </div>
    );
}
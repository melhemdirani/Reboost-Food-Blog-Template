import "./Newslater.scss";


export default function Newslater() {
    return (
        <div className="Newslater">
            <h6>Subscribe to newslater</h6>
            <form>
                <input type="email" placeholder="E-Mail" />
                <input type="submit" value="Subscribe" />
            </form>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    );
}
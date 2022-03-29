import "./Footer.styles.scss";

export default function Footer() {
    return (
        <div className="Parent">
            <div className="text">
                <span>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</span>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Recipes</a>
                <a href="/">About Us</a>
                <a href="/">Blog</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
}
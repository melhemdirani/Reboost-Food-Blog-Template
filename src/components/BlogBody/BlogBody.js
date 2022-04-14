import "./BlogBody.scss";

import MainBody from "./MainBody";
import NameCard from "./NameCard";
import SideBar from "./SideBar";


export default function BlogBody() {
    return (
        <center>
            <div className="blog-child">
                <section className="blog-left">
                    <MainBody />
                </section>
                <section className="blog-right">
                    <NameCard />
                    <SideBar />
                </section>
            </div>
        </center>
    );
}
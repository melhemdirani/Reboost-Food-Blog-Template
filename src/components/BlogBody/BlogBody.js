import "./BlogBody.scss";

import MainBody from "./MainBody";
import NameCard from "./NameCard";
import Newslater from "./Newslater";
import SideBar from "./SideBar";


export default function BlogBody() {
    return (
        <center>
            <div className="BlogBody">
                <section className="blog-left">
                    <MainBody />
                </section>
                <section className="blog-right">
                    <NameCard />
                    <SideBar />
                    <Newslater />
                </section>
            </div>
        </center>
    );
}
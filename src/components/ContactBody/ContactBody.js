import NameCard from "../BlogBody/NameCard";
import Newslater from "../BlogBody/Newslater";
import SideBar from "../BlogBody/SideBar";
import ContactForm from "../ContactForm/ContactForm";
import ContactMainBody from "./ContactMainBody"
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import SearchSection from "../SearchSection/SearchSection";

export default function ContactBody() {
    return (
        <>
            <center>
                <div className="BlogBody">
                    <section className="blog-left">
                        <ContactMainBody />
                        <ContactForm />
                    </section>
                    <section className="blog-right">
                        <NameCard />
                        <SideBar />
                        <Newslater />
                    </section>
                </div>
            </center>
        </>
    );
}
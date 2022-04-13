import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogComment from "../../components/BlogComment/BlogComment";
import BlogMessage from "../../components/BlogMessage/BlogMessage";


export default function Blog() {
    return (
        <>
            <Navbar />
            <BlogBody />
            <BlogComment />
            <BlogMessage />
            {/* <Gallery /> */}
            <Footer />
        </>
    );
}
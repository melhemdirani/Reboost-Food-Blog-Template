import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogComment from "../../components/BlogComment/BlogComment";
import BlogMessage from "../../components/BlogMessage/BlogMessage";
import Comments from "../../components/Comment/Comments";


export default function Blog() {
    return (
        <>
            <Navbar />
            <BlogBody />
            <BlogComment />
            <BlogMessage />
            <Comments />
            <Gallery />
            <Footer />
        </>
    );
}
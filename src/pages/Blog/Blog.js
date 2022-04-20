import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import BlogBody from "../../components/BlogBody/BlogBody";
import BlogComment from "../../components/BlogComment/BlogComment";
import BlogMessage from "../../components/BlogMessage/BlogMessage";
import SearchArea from "../../components/SearchArea/SearchArea";


export default function Blog() {
    return (
        <>
            <Navbar />
            <SearchArea />
            <BlogBody />
            <BlogComment />
            <BlogMessage />
            <Gallery />
            <Footer />
        </>
    );
}
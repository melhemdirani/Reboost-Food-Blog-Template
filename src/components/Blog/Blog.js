import Sidebar from './Sidebar';
import "./Blog.styles.scss";
import Body from './Body';


export default function NewBlog() {
    return (
        <div className="Blog_Container">
            <div className="Container">
                <Body />
                <Sidebar />
            </div>
        </div>
    );
}
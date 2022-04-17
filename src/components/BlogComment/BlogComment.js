import commentimg1 from '../../assets/images/commentimg1.jpg';
import commentimg2 from '../../assets/images/commentimg2.jpg';
import commentimg3 from '../../assets/images/commentimg3.jpg';
import {bfakeData} from './bfakeData';
import './BlogComment.scss';

export default function BlogComment() {
    const Comment = ({ imgsrc, content, name, date, Reply }) => {
        return (
            <div className='Comment_Container'>
                <img src={imgsrc} alt="avatar" />
                <div className='Content'>
                    <a href='#'>{name} <span>|</span></a>
                    <a href='#'>{date} <span>|</span></a>
                    <a href='#'>{Reply}</a>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
    return (

        <div className='Comments'>
            <div className="comment-max-width">
                <h1>Comments</h1>
                <div className="first-comment">
                    <Comment
                        imgsrc={commentimg1}
                        name="Matt"
                        date=" 15 April, 2018"
                        Reply="Reply"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
                    />
                </div>
                <div className="second-comment">
                    <Comment
                        imgsrc={commentimg2}
                        name="Jerry"
                        date=" 24 June, 2018"
                        Reply="Reply"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
                    />
                </div>
                <div className="third-comment">
                    <Comment
                        imgsrc={commentimg3}
                        name="Cristiano"
                        date="12 July, 2018"
                        Reply="Reply"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
                    />
                </div>
            </div>
        </div>
    )
}
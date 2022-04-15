import React from 'react'

import commentimg1 from '../../assets/images/commentimg1.jpg';
import commentimg2 from '../../assets/images/commentimg2.jpg';
import commentimg3 from '../../assets/images/commentimg3.jpg';
import './Comments.style.scss'


const  Comments = () => {
   
  const Comment = ({imgsrc , content , name , date ,Reply}) => {
      return (
          <div className='Comment_Container'>
              <img src={imgsrc} alt="avatar"/>
                <div className='Content'>
                  <a href='#'>{name}</a>
                  <a href='#'>{date}</a>
                  <a href='#'>{Reply}</a>
                  <p>{content}</p>
              </div>
          </div>
      )
  }
    return ( 
        
        <div className='Comments'>
            <h1>Comments</h1>
            <Comment 
              imgsrc={commentimg1}
              name="Matt |"
              date=" 15 April 2018"
              Reply=" | Reply"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
            />
            <Comment 
               imgsrc={commentimg2}
               name="Jerry |"
               date=" 24 June 2018"
               Reply=" | Reply"   
               content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
            />
            <Comment
               imgsrc={commentimg3}
               name="Cristiano |"
               date=" 12 July 2018"
               Reply=" | Reply" 
               content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
            />
        </div>
  )
}

export default  Comments
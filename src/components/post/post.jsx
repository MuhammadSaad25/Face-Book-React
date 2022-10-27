import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
import './index.css'
// import { useState } from 'react'

let Post = ({ postText, postImage, profilePhoto, name }) => {
    return (
        <div className='post'>

            <div className='postHeader'>
                <img className='profilePhoto' src={profilePhoto} alt="profile" />
                <div>
                    {name} <br />
                    {/* {moment(postDate).fromNow()} */}
                </div>
            </div>


            <p className='postText'>

                {postText}
            </p>

            <img className='postImage' src={postImage} alt="post" />

            <hr />
            <div className='postFooter'>
                <div>
                    <FaRegThumbsUp className="post-icon" />
                    like
                </div>
                <div>
                    <FaRegCommentAlt className="post-icon" />
                    comment
                </div>
                <div>
                    <FaShare className="post-icon" />
                    share
                </div>
            </div>

        </div>
    );
}
export default Post;

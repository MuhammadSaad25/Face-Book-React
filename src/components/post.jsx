import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
// import { useState } from 'react'

let Post = ({ postText }) => {
    // const [profilePhoto,setProfilePhoto] =useState ([])
    // const [profilePhoto, name, postDate, postText, postImage ]
    // const [] = useState([])

    // const savePost = (e) => {
    //     e.preventDefault();
    //     console.log("postText", postText)


    // }

    return (
        <>
            {/* <form onClick={savePost}>
                <input
                    placeholder="what in your mind"
                    onChange={(e) => {
                        setPostText(e.target.value)
                    }}
                >

                </input>
                <button type="submit">post</button>
            </form> */}
            <div className='post'>

                <div className='postHeader'>
                    {/* <img className='profilePhoto' src={profilePhoto} alt="profile" /> */}
                    <div>
                        {/* {name} <br /> */}
                        {/* {moment(postDate).fromNow()} */}
                    </div>
                </div>


                <h1 className='postText'>

                    {postText}
                </h1>

                {/* <img className='postImage' src={postImage} alt="post" /> */}

                <hr />
                <div className='postFooter'>
                    <div><FaRegThumbsUp className="post-icon" />like </div>
                    <div><FaRegCommentAlt className="post-icon" />comment</div>
                    <div><FaShare className="post-icon" />share</div>
                </div>
                <hr />

            </div>
        </>
    );
}
export default Post;

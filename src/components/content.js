import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
// import { MdOutlinePersonalVideo } from "react-icons/md";
// import { TbGridDots } from "react-icons/tb";
import moment from 'moment';

let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
  <div className='post'>
    <div className='postHeader'>
      <img className='profilePhoto' src={profilePhoto} alt="profile" />
      <div>
        {name} <br />
        {moment(postDate).fromNow()}
      </div>
    </div>

    <div className='postText'>
      {postText}
    </div>

    <img className='postImage' src={postImage} alt="post" />

    <hr />
    <div className='postFooter'>
      <div><FaRegThumbsUp className="post-icon" />like </div>
      <div><FaRegCommentAlt className="post-icon" />comment</div>
      <div><FaShare className="post-icon" />share</div>
    </div >
    <hr />

  </div >
);


const content = () => {
  return (
    <div className='page'>

      <Post
        name="Shëìkh Mühämmâd Ärëéb (شیخ)"
        profilePhoto="./imgs/cp-1_28x28.jpg"
        postDate="16 sep 2022"
        postImage="./imgs/post1.jfif"
        postText="No Comments "
      />
      <Post
        name="Zoomy Khan"
        profilePhoto="./imgs/cp-3_28x28.jpg"
        postDate="15 sep 2022"
        postImage="./imgs/post2.jpg"
        postText="JBH Khan Shab"
      />
      <Post
        name="Muhammad Bilal Aqeel (محمد بلال عقیل)"
        profilePhoto="./imgs/cp-2_28x28.jpg"
        postDate="11 sep 2022"
        postImage="./imgs/post3.jpg"
        postText="He Mode To Ao Room Lgayen M24 Ka"
      />
      <Post
        name="Saylani Mass IT Traning"
        profilePhoto="./imgs/cp-4_28x28.png"
        postDate="14 Sep 2022"
        postImage="./imgs/post4.jpeg"
        postText="Dear Youth Of Pakistan!
        As we all knows that requirement of Web Developers and other Tech Graduates has been increasing in International and local  IT industry with every passing day although we (Pakistanis) are doing great work in our capacity but still there's a huge gap between market requirement and availability of quality developers. So, we have decided to launch an other batch of Web and Mobile Application Development in all our campuses across Pakistan for Males and Females also. "
      />


    </div>
  );
}



export default content;
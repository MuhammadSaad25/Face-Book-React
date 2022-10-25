// import moment from 'moment';
import Post from './post'
import { useState } from "react";



const Content = () => {
  const [postText, setPostText] = useState("")
  const [posts, setPosts] = useState({})


  const savePost = (e) => {
    e.preventDefault();
    console.log("postText", postText)


  }

  return (
    <div className='page'>
      <form onClick={savePost}>
        <input
          placeholder="what in your mind"
          onChange={(e) => {
            setPostText(e.target.value)
          }}
        >

        </input>
        <button type="submit">post</button>
      </form>

      <div className="container">
        
        {posts.map(eachPost => (

        <div className="sub-container" key={eachPost?.name}>
          <div className="img-div">
            <img src={eachPost?.image?.thumbnail?.contentUrl?.replace("&pid=News", "")?.replace("pid=News&", "")?.replace("pid=News", "")} alt="" />
          </div>
          <div className="data-div">
            {/* <div>{moment(eachPost?.datePublished)?.format('DD MMMM  h:mm a')}</div> */}
            <h3>{eachPost?.name}</h3>
            <p>{eachPost?.description}</p>
            <a className="red1" href={eachPost?.url} target="_blank" rel="noreferrer">Read More</a>
          </div>
        </div>

      ))}
      </div>






      <Post

      // name="Shëìkh Mühämmâd Ärëéb (شیخ)"
      // profilePhoto="./imgs/cp-1_28x28.jpg"
      // postDate="16 sep 2022"
      // postImage="./imgs/post1.jfif"
      // postText={postText} >>>>>>>>>>>>>>>>>>>>>>
      />
      {/* <Post
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
      /> */}


    </div>
  );
}



export default Content;
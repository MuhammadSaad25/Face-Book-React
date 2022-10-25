// import moment from 'moment';
import Post from './post'
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { useEffect } from 'react';
import moment from 'moment';


const firebaseConfig = {
  apiKey: "AIzaSyAxYIc8w-tPw_MPCv7033gzFY7KUCw1iCM",
  authDomain: "fakebook-database.firebaseapp.com",
  projectId: "fakebook-database",
  storageBucket: "fakebook-database.appspot.com",
  messagingSenderId: "96515663185",
  appId: "1:96515663185:web:d2ebdebc4fbe862ab31f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



const Content = () => {
  const [postText, setPostText] = useState("")
  const [posts, setPosts] = useState([])
useEffect(()=>{

  const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => `, doc.data());
    
    
    setPosts((prev)=>{
      
      let newArray = [...prev,doc.data()];

      return newArray
    });
 
  });
}

getData() 
},[])





  const savePost = async(e) => {
    e.preventDefault();
    console.log("postText", postText)
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
        createdon: new Date().getTime(), 
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    

  } 

  return (
    <div className='page'>
      <form onSubmit={savePost}>
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
        
        {posts.map((eachPost , i) => (

        <div className="sub-container" key={i}>

          <span>
            {moment(eachPost?.datePublished).format('Do MMMM h:mm a')}
          </span>
          
          <h3>
            {eachPost?.text}
          </h3>

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
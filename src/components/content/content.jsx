import './index.css'
import Post from '../post/post'
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, onSnapshot, query, doc, orderBy, limit,serverTimestamp } from "firebase/firestore";
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

  useEffect(() => {

    // const getData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => `, doc.data());


    //     setPosts((prev) => {

    //       let newArray = [...prev, doc.data()];

    //       return newArray
    //     });

    //   });
    // }

    // getData() 

    let unsubscribe = null;

    const getRealtimeData = async () => {
      const q = query(collection(db, "posts"), orderBy("createdon" ,"desc"));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          // posts.unshift(doc.data());
          posts.push(doc.data());
        });

        setPosts(posts);
        console.log("posts", posts);
      });

    }
    getRealtimeData();

    return () => {
      console.log("cleanup")
      unsubscribe();
    }

  }, [])





  const savePost = async (e) => {
    e.preventDefault();
    console.log("postText", postText)
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
        createdon: serverTimestamp(),
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
            e.preventDefault();
            setPostText(e.target.value)
          }}
        >

        </input>
        <button type="submit">post</button>
      </form>




      <div className="container">

        {posts.map((eachPost, i) => (


          <Post
            key={i}
            // name="Shëìkh Mühämmâd Ärëéb (شیخ)"
            // profilePhoto="./imgs/cp-1_28x28.jpg"
            // postImage="./imgs/post1.jfif"

            postDate={moment(
              (eachPost?.createdon?.seconds) ?
              eachPost?.createdon?.seconds * 1000
              :
              undefined
            )
            .fromNow()
              // .format('Do MMMM, h:mm a')
            }            
            postText={eachPost?.text}
          />
        ))}
      </div>

    </div>
  );
}



export default Content;
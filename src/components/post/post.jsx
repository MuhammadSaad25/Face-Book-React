import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
import './index.css'
// import moment from 'moment';
import { MdDeleteForever } from "react-icons/md";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    onSnapshot,
    query,
    serverTimestamp,
    orderBy,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";


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




let Post = (props) => {

    const deletePost = async () => {
        // console.log("postid: ", props.id);

        await deleteDoc(doc(db, "posts", props.id));
    };


    return (
        <div className='post'>

            <div className='postHeader'>
                {/* <img className='profilePhoto' src={profilePhoto} alt="profile" /> */}
                <div>
                    {/* {name} <br /> */}
                    {/* {createdon}  */}
                    {props.postDate}
                    {/* {moment(createdon).format('Do MMMM, h:mm a')} */}
                </div>
                <div>
                <button onClick={() => deletePost(props.id)}>
          <MdDeleteForever />
        </button>
                    <button>Edit</button>
                </div>
            </div>


            <p className='postText'>
                {props.postText}
            </p>

            {/* <img className='post    Image' src={postImage} alt="post" /> */}

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

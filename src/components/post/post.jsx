import { FaRegThumbsUp, FaRegCommentAlt, FaShare } from "react-icons/fa";
import "./index.css";
// import moment from 'moment';
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

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
  appId: "1:96515663185:web:d2ebdebc4fbe862ab31f70",
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

  const [editing, setEditing] = useState({
    editingId: null,
    editingText: "",
  });

  const updatePost = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "posts", editing.editingId), {
      text: editing.editingText,
    });

    setEditing({
      editingId: null,
      editingText: "",
    });
  };

  return (
    <div className="post">
      <div className="postHeader">
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
          {editing.editingId === props?.id ? null : (
            <button
              onClick={() => {
                setEditing({
                  editingId: props?.id,
                  editingText: props?.postText,
                });
              }}
            >
              <FiEdit />
            </button>
          )}
        </div>
      </div>

      {props.id === editing.editingId ? (
        <form onSubmit={updatePost}>
          <input
            type="text"
            value={editing.editingText}
            onChange={(e) => {
              setEditing({
                ...editing,
                editingText: e.target.value,
              });
            }}
            placeholder="please enter updated value"
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p className="post" target="_blank" rel="noreferrer">
          {props?.postText}
        </p>
      )}

      {/* <img className='post    Image' src={postImage} alt="post" /> */}

      <hr />
      <div className="postFooter">
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
};
export default Post;

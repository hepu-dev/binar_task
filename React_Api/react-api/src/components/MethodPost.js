import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function MethodPost(){
<<<<<<< HEAD
    const [userID, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [post, setPost] = useState("")


    const submitHandler = (e) =>{
        e.preventDefault();
        const data = JSON.stringify({userID, title, body});

        axios
            .post("https://jsonplaceholder.typicode.com/posts", data,{
                Headers: {"Content-type": "application/json; charset=UTF-8"},
            })
            .then((res)=>{console.log(res);})
            .then((Response)=> Response.JSON())
            .then((JSON)=> console.log(JSON));

        axios
            .get("https://jsonplaceholder.typicode.com/posts")
                .then ((Response)=>{
                    setPost(Response.data)
                })
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <p>ID</p>
                    <input
                        type="number"
                        name="userID"
                        value={userID}
                        onChange={(e)=> setUserId(e.target.value)}
                    />
                     <p>Title</p>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                     <p>Body</p>
                      <input
                        type="text"
                        name="body"
                        value={body}
                        onChange={(e)=> setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            <li>
                {post.title}
                {post.userID}
                {post.body}
            </li>
=======
    const [userId, setUserId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [cobaPost, setCobaPost] = useState("")
  
    const url = 'https://jsonplaceholder.typicode.com/posts'
  
    const submitPost = (e) => {
      e.preventDefault()
      setUserId("")
      setTitle("")
      setBody("")
      axios.post(url, {
        userId,
        title,
        body
      },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((response) => {
          console.log(response.data);
          setCobaPost(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    return (
      <>
        <div >
          <form >
              <div>
              User ID     :<input type="number" value={userId} onChange={(e)=> setUserId(e.target.value)} />
              </div>
              <div>
              title      :<input  type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
              </div>
              <div>
              Body       :<input  type="text" value={body} onChange={(e)=> setBody(e.target.value)} />
              </div>
                <button onClick={submitPost} className='createPost'>Create Post</button>
          </form>
>>>>>>> 3a9497538584b38c95292270763cfa24aeeb1e4c
        </div>
        {cobaPost ? <div>
            <h3>
                User ID:  {cobaPost.userId},
                title : {cobaPost.title},
                body : {cobaPost.body}
            </h3>
        </div> : null}
      </>
    );
}

export default MethodPost;
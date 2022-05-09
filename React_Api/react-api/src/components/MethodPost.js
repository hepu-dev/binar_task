import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function MethodPost(){
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
        </div>
    )
}

export default MethodPost;
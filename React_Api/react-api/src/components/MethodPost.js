import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function MethodPost(){
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
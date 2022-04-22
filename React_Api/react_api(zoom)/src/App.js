import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';


function App() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() =>{
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((Response)=>{
        setPost(Response.data)
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
        setError(true);
      });

  },[]);

  return (
    <div className="App">
      <ol>
        {loading && <div>loading..</div>}
      {!loading ? post.map((post)=>(
       <li>
         {post.title}
         <h1>bree</h1>
       </li>
      )): (<div>loading...</div>)}
      </ol>
    </div>
  );
}

export default App;

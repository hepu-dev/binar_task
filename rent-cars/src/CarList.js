import { useEffect, useState } from "react";
import axios from 'axios'

export default function CarList(){


  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() =>{
    setLoading(true);
    axios.get('https://rent-cars-api.herokuapp.com/admin/car')
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

    return(
        <div>
            <h3>Card </h3>
            <ol>
                {loading && <div>loading..</div>}
                {!loading ? post.map((post)=>(
                <>
                    <li>
                        {post.id}
                    </li>
                    <li>
                        {post.name}
                    </li>
                    <li>
                        {post.category}
                    </li>
                    <li>
                        {post.price}
                    </li>
                    <li>
                        <img src={post.image} alt={post.name} width="200"/>
                    </li>
                </>
                )): (<div>loading...</div>)}
            </ol>
        </div>
    )
}
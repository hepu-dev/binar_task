import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import useAxios from "./hooks/useAxios";

export default function CarList(){

  const navigate = useNavigate();
  const {loading, response, error} = useAxios('https://rent-cars-api.herokuapp.com/admin/car')  
//   const [cardList, setCarList] = useState();

//   useEffect(() =>{
//     axios.get('https://rent-cars-api.herokuapp.com/admin/car')
//       .then((Response)=>{
//         setCarList(Response.data)
//       })
//       .catch((error)=>{
//         console.log(error);
//       });

//   },[]);

  const handleclick = (id) =>{
      navigate(`/detail/${id}`);
  }

    return(
        <div>
            <h3>Card </h3>
            <ol>
                {!loading &&(
                    response.data.map((post)=>(
                        <li>{post.name}</li>
                    ))
                )}
                {/* link to detail car by id */}
                {/* {cardList.map((car)=>(
                <li key={car.id} onClick={handleclick(car.id)}>
                    <div>{car.name}</div>
                    <li>
                        <img src={car.image} alt={car.name} width="200"/>
                    </li>
                </li>
                ))} */}
            </ol>
        </div>
    )
}
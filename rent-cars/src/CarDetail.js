import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function CarDetail(){

    const params = useParams();

    useEffect(()=>{
        console.log(params);
    },[params]);

    return(
        <div>CarDetail</div>
    )
}
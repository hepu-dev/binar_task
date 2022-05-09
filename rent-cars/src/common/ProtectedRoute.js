import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const storage = window.localStorage
    const token =  storage.getItem('token')
    const decoded = jwt_decode(token||'')
    console.log(decoded)
    const isLoggin = decoded.exp > (Date.now()/1000) ;


    if(isLoggin){
        return <Outlet/>;
    }
    return <Navigate to ={'/Login'}/>;
}
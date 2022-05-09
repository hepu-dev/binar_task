import { Link, Outlet } from "react-router-dom"

export default function Layout(){

    return(
        <div>
            <nav>
                Navigation
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                </ol>
            </nav>
            <Outlet/>
        </div>
    )
}
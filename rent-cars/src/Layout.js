import { Outlet } from "react-router-dom"

export default function Layout(){

    return(
        <div>
            <nav>
                Navigation
                <ol>
                    <li>
                        Home
                    </li>
                </ol>
            </nav>
            <Outlet/>
        </div>
    )
}
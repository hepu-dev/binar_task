import axios from "axios";
import { useState } from "react";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.prevent.default();
        axios.post('https://notflixtv.herokuapp.com/api/v1/users', {
               email,
               password
            },
            {
                header: {
                    'content-type': 'application/json'
                }
            }).then ((response) => {
                console.log(response)
                const token = response.data.data.token;
                const storage = window.localStorage;
                storage.setItem('token', token)

            }).catch((error) => {
                console.log(error)

            });

    };

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}> 
                <label>Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <br></br>
                <label>Password Confirmation
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>             
               <br></br><button type="submit">Login</button>
             
            </form>
        </div>

    )
}
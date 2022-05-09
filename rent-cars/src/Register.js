import { useState } from "react"
import axios from "axios";


export default function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState('');


    const submitHandler = (e) => {
        e.prevent.default();
        axios.post('https://notflixtv.herokuapp.com/api/v1/users', {
               firstName: firstName,
               lastName: lastName,
               email,
               password,
               password_confirmation: password_confirmation
            },
            {
                header: {
                    'content-type': 'application/json'
                }
            }).then ((response) => {
                console.log(response);
                const storage = window.localStorage;
                storage.setItem('token', response.data.data)
            }).catch((error) => {
                console.log(error)

            });

    };

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}> 
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <label>firstName</label>
                <input type="name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <br></br>
                <label>lastName</label>
                <input type="name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <br></br>   
                <label>password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label>Password Confirmation</label>
                <input type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
               
               <br></br><button type="submit">Register</button>
             
            </form>
        </div>

    )
}
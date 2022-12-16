import { useState } from "react";
import { createAccount } from "../api/getRequests";

function NewAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setTargetValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    return (
        <>
            <h1>Create an Account</h1>
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    createAccount({ username, password })
                    // try {
                    //     const response = await fetch(`${BASEURL}/users/register`,
                    //         {
                    //             method: "POST",
                    //             headers: {
                    //                 'Content-Type': 'application/json'
                    //             },
                    //             body: JSON.stringify({
                    //                 user: {
                    //                     username,
                    //                     password,
                    //                 }
                    //             })
                    //         });

                    //     const replyToken = response.data.data.token;
                    //     console.log(replyToken);
                    // } catch (error) {
                    //     console.log('Failed to Register')
                    //     console.errror(error)
                    // }

                    //make API Call to register new user, get and store token in local storage...

                }}
            >
                <label for="username">Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    id="username"
                    value={username}
                    onChange={setTargetValue(setUsername)}
                    required />

                <label for="password">Password</label>
                <input type="password"
                    placeholder="Enter Password"
                    id="password"
                    value={password}
                    onChange={setTargetValue(setPassword)}
                    required />

                <button>Log In</button>
            </form>
        </>
    )
}

export default NewAccount;
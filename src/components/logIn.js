import { useState } from "react";
import { logIn } from "../api/getRequests"

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const setTargetValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    return (
        <>
            <h1>Log In Page</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                logIn({ username, password })
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
                <input
                    type="password"
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

export default LogIn;
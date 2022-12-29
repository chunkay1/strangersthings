import { useState } from "react";
import { logIn } from "../api/accountRequests"
import { setTargetValue } from "../constants/constants";


function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const setCredentials = async () => {
        await logIn({ username, password });
        window.location.reload()
    }

    return (
        <>
            <h1>Log In</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCredentials();
                setUsername('');
                setPassword('');
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
};

export default LogIn;
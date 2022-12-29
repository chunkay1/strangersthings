import { useState } from "react";
import { createAccount } from "../api/accountRequests";
import { setTargetValue } from "../constants/constants";

function NewAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setCredentials = async () => {
        await createAccount({ username, password });
        window.location.reload()
    }

    return (
        <>
            <h1>Create an Account</h1>
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    setCredentials()
                    setUsername('')
                    setPassword('')
                }}
            >
                <label for="createUsername">Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    id="createUsername"
                    value={username}
                    onChange={setTargetValue(setUsername)}
                    required />

                <label for="createPassword">Password</label>
                <input type="password"
                    placeholder="Enter Password"
                    id="createPassword"
                    value={password}
                    onChange={setTargetValue(setPassword)}
                    required />

                <button>Create Account</button>
            </form>
        </>
    )
};

export default NewAccount;
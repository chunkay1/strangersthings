import { useState } from "react";
import { logIn } from "../api/accountRequests"
import { setTargetValue } from "../constants/constants";
import styles from "./LogIn.module.css"


function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const setCredentials = async () => {
        await logIn({ username, password });
        window.location.reload()
    }

    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.text}>Log In</h3>
                <form className={styles.form} onSubmit={
                    (event) => {
                        event.preventDefault();
                        setCredentials();
                        setUsername('');
                        setPassword('');
                    }}
                >
                    <div className={styles.inputs}>
                        <label className={styles.text} for="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="username"
                            value={username}
                            onChange={setTargetValue(setUsername)}
                            required />
                    </div>

                    <div className={styles.inputs}>
                        <label className={styles.text} for="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            value={password}
                            onChange={setTargetValue(setPassword)}
                            required />
                    </div>

                    <div className={styles.submit}>
                        <button className={styles.button}>Log In</button>
                    </div>

                </form>
            </div>
        </>
    )
};

export default LogIn;
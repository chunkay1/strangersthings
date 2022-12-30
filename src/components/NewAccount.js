import { useState } from "react";
import { createAccount } from "../api/accountRequests";
import { setTargetValue } from "../constants/constants";
import styles from "./NewAccount.module.css"

function NewAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setCredentials = async () => {
        await createAccount({ username, password });
        window.location.reload()
    }

    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.text}>Create an Account</h3>
                <form className={styles.form} onSubmit={
                    (event) => {
                        event.preventDefault();
                        setCredentials()
                        setUsername('')
                        setPassword('')
                    }}
                >
                    <div className={styles.inputs}>
                        <label className={styles.text} for="createUsername">Username:</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="createUsername"
                            value={username}
                            onChange={setTargetValue(setUsername)}
                            required />
                    </div>

                    <div className={styles.inputs}>
                        <label className={styles.text} for="createPassword">Password:</label>
                        <input type="password"
                            placeholder="Enter Password"
                            id="createPassword"
                            value={password}
                            onChange={setTargetValue(setPassword)}
                            required />
                    </div>

                    <div className={styles.submit}>

                        <button className={styles.button}>Create Account</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default NewAccount;
import { useState } from "react";
import { setTargetValue } from "../constants/constants";
import { newMessage } from "../api/messageRequests";
import styles from "./MessageForm.module.css"

function MessageForm({ postID, setMessageState }) {
    const [message, setMessage] = useState('')


    return (
        <div className={styles.container}>

            <form
                className={styles.form}
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        console.log(message)
                        console.log(postID)
                        newMessage(message, postID)
                        setMessage('')
                        setMessageState(false)
                        //code or helper function that returns a success message on an interval. 
                    }}>

                <div>
                    <h3 className={styles.header}>Your Message</h3>
                </div>

                <div>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={setTargetValue(setMessage)}
                        value={message}
                        required />
                </div>
                <button
                    className={styles.sendButton}>Send</button>

            </form>

            <div>

                <button
                    className={styles.cancelButton}
                    onClick={
                        (event) => {
                            return (
                                setMessageState(false)
                            )
                        }
                    }

                >Cancel</button>
            </div>

        </div>
    )

}

export default MessageForm;
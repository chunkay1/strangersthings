import { useState } from "react";
import { setTargetValue } from "../constants/constants";
import { newMessage } from "../api/messageRequests";

function MessageForm({ postID, setMessageState }) {
    const [message, setMessage] = useState('')


    return (
        <div>

            <form
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
                <span>
                    <label
                        for="newMessage">Your Message:</label>

                    <br />

                    <input
                        className="newMessage"
                        type="text"
                        onChange={setTargetValue(setMessage)}
                        value={message}
                        required />

                    <button
                        className="newMessage">Send Message</button>
                </span>
            </form>

            <button
                className="cancel"
                onClick={
                    (event) => {
                        return (
                            setMessageState(false)
                        )
                    }
                }

            >cancel/go back</button>

        </div>
    )

}

export default MessageForm;
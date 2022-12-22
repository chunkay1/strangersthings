import { useState } from "react";
import { setTargetValue } from "../constants/constants";
import { newMessage } from "../api/messageRequests";

function MessageForm({ postID }) {
    const [message, setMessage] = useState('')


    return (
        <div>

            <form
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        console.log('message sent')
                        newMessage({ message, postID })
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
                className="cancel">cancel/go back</button>

        </div>
    )

}

export default MessageForm;
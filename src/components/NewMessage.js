import { useEffect, useState } from "react";
import { newMessage } from "../api/messageRequests";
import { STORAGE_KEY } from "../api/postsRequests";

import { setTargetValue } from "../constants/constants";

function NewMessage({ postID }) {
    const [message, setMessage] = useState('');


    return (
        <>
            <form
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        console.log('message sent')
                        newMessage({ message, postID })
                    }
                }
            >
                <span>
                    <label
                        for="newMessage">Your Message:</label>
                    <input
                        className="newMessage"
                        type="text"
                        onChange={setTargetValue(setMessage)}
                        value={value}
                        required
                    />
                    <button
                        className="newMessage">Send Message</button>
                </span>
            </form>

        </>
    )
}
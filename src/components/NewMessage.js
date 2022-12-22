// import { useEffect, useState } from "react";
// import { newMessage } from "../api/messageRequests";
import { STORAGE_KEY } from "../api/postsRequests";

// import { setTargetValue } from "../constants/constants";
import MessageForm from "./MessageForm";

function NewMessage({ postID }) {
    // const [message, setMessage] = useState('');


    return (
        <>

            <MessageForm
                postID={postID}
            />

        </>
    )
}

export default NewMessage;
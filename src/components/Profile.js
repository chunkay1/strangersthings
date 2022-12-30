import { useState, useEffect } from "react";
import { myProfile } from "../api/accountRequests";
import Messages from "./Messages";
import { AUTHOR_ID } from "../api/accountRequests";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css"

function Profile(props) {
    const user = localStorage.getItem(`${AUTHOR_ID}`)
    const token = props.token;

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessagesAsync = async () => {
            const messages = await myProfile({ token });

            setMessages(messages)
        }
        getMessagesAsync();
    }, [token]);



    return (
        <>

            {
                (!token)
                    ?
                    <div className={styles.container}>
                        <h3 className={styles.header}>Please <Link to={'/home'}>log in or create a profile</Link> to view your messages</h3>
                    </div>
                    :
                    <div>
                        <Messages
                            messages={messages}
                            user={user} />
                    </div>
            }
            {/* <h1>Welcome back,</h1>
            <span>{token}</span>

            <h2>Messages: </h2>


            <Messages
                messages={messages}
                user={user} /> */}
        </>
    )
};

export default Profile;
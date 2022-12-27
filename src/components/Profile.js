import { useState, useEffect } from "react";
import { myProfile } from "../api/accountRequests";
import Messages from "./Messages";
import { AUTHOR_ID } from "../api/accountRequests";

function Profile(props) {
    const user = localStorage.getItem(`${AUTHOR_ID}`)
    const username = props.username;
    const token = props.token;


    const [messages, setMessages] = useState([]);


    // const messages = props.messages;



    useEffect(() => {
        const getMessagesAsync = async () => {
            const messages = await myProfile({ token });

            setMessages(messages)
            // console.log(posts);
        }
        getMessagesAsync();
    }, []);



    return (
        <>
            <h1>Welcome back,</h1>
            <span>{token}</span>

            <h2>Messages: </h2>


            <Messages
                messages={messages}
                user={user} />

            {/* {
                messages.map(({ content, fromUser, post, _id }) => {
                    const senderID = fromUser._id;



                    {
                        user === senderID

                            ?

                            <SentMessages
                                key={_id}
                                content={content}
                                fromUser={fromUser}
                                post={post}
                                token={token}
                            />

                            :

                            null
                    }


                    <h3>Inbox</h3>
                    {
                        user !== senderID

                            ?

                            <InboxMessages
                                key={_id}
                                content={content}
                                fromUser={fromUser}
                                post={post}
                                token={token}
                            />

                            :

                            null
                    }

                })
            } */}


        </>
    )
};

export default Profile;
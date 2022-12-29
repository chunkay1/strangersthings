import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";
import EditForm from "./EditForm";
import MessageForm from "./MessageForm";

function FeaturedPost({ postState, featuredPostProps, setPostChange }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const token = localStorage.getItem(`${STORAGE_KEY}`)

    const { title, price, description, location, willDeliver, username, authID, postID } = featuredPostProps;

    const [messageState, setMessageState] = useState(false);
    const [editState, setEditState] = useState(false);

    return (
        <div key={postID}>

            <h3>{title}</h3>

            <span>Seller: {username}</span>
            <br />

            <span>Price: {price}</span>
            <br />

            <span>Description: {description}</span>
            <br />
            <span>Location: {location}</span>
            <br />
            <span>Willing to Deliver?: {willDeliver}</span>
            <br />

            {
                messageState

                    ?

                    <MessageForm
                        setMessageState={setMessageState}
                        postID={postID}
                    />

                    :

                    null
            }

            {
                editState

                    ?

                    <EditForm
                        setEditState={setEditState}
                        postID={postID}
                        title={title}
                        username={username}
                        price={price}
                        description={description}
                        location={location}
                        willDeliver={willDeliver}
                        postState={postState}
                        setPostChange={setPostChange}
                    />

                    :

                    null
            }

            {
                (token && (userID !== authID) && !messageState)

                    ?

                    <button
                        onClick={
                            (event) => {
                                setMessageState(true);
                            }
                        }
                    >Send Seller a Message</button>

                    :

                    null
            }

            {
                (token && (userID === authID) && !editState)

                    ?

                    <>

                        <button
                            onClick={
                                (event) => {
                                    //add an are you sure button before allowing you to actually delete the post.
                                    deletePost(token, postID);
                                    postState(false);
                                    setPostChange(true);
                                }
                            }
                        >Delete</button>

                        <br />

                        <button
                            onClick={
                                (event) => {
                                    setEditState(true);
                                }
                            }
                        >Edit</button>

                        <br />

                    </>
                    :

                    null
            }

            <button
                onClick={
                    (event) => {
                        postState(false)
                    }
                }
            > Close </button>

        </div >
    )
}

export default FeaturedPost; 
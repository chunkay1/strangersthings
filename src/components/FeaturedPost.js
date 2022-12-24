import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";
import EditForm from "./EditForm";
import MessageForm from "./MessageForm";

function FeaturedPost({ postState, featuredPostProps, test }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const token = localStorage.getItem(`${STORAGE_KEY}`)

    const { title, price, description, location, willDeliver, author, username, authID, postID } = featuredPostProps;

    const [messageState, setMessageState] = useState(false);
    const [editState, setEditState] = useState(false);


    // console.log({ title })

    // console.log(author);
    // console.log(userID);
    // console.log(authID);
    // console.log(postID)
    // console.log(username)
    // console.log(token);
    // console.log(price);
    // console.log({ description });
    // console.log({ location });
    // console.log({ willDeliver });
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
                    />

                    // <EditForm
                    //     setEditState={setEditState}
                    //     postID={postID}
                    //     editedTitle={title}
                    //     editedUsername={username}
                    //     editedPrice={price}
                    //     editedDescription={description}
                    //     editedLocation={location}
                    //     willDeliver={willDeliver}
                    // />

                    :

                    null
            }

            {
                (token && (userID !== authID) && !messageState)

                    ?

                    <button
                        onClick={
                            (event) => {
                                // event.preventDefault();
                                // console.log(postID)
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
                                    deletePost({ postID, token })
                                }
                            }
                        >Delete</button>

                        <br />

                        <button
                            // onClick={editPost()
                            onClick={
                                (event) => {
                                    // console.log('This is the edit button')
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
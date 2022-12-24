import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";
import MessageForm from "./MessageForm";

function FeaturedPost({ postState, featuredPostProps, test }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    // const authID = localStorage.getItem(`${AUTHOR_ID}`)
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    // 

    const { title, price, description, location, willDeliver, author, username, authID, postID } = featuredPostProps;

    const [messageState, setMessageState] = useState(false);

    // const { title, price, description, location, willDeliver, authID, postID, author, username } = featuredPostProps;


    // const [featuredPost, setFeaturedPost] = useState(false);

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

            <button
                onClick={
                    (event) => {
                        postState(false)

                    }
                }
            > Close </button>

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
                ((token && userID !== authID) && !messageState)
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
                userID === authID
                    ?
                    <span>
                        <button
                            // onClick={deletePost()}

                            onClick={
                                (event) => {
                                    deletePost({ postID, token })
                                }
                            }
                        >Delete</button>

                        <button
                            // onClick={editPost()
                            onClick={
                                (event) => {
                                    console.log('This is the edit button')
                                }
                            }
                        >Edit</button>
                    </span>

                    :

                    null


            }


        </div >
    )
}

export default FeaturedPost; 
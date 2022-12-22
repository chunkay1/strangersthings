import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";

function FeaturedPost({ postState, featuredPostProps }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    // const authID = author._id
    const authID = localStorage.getItem(`${AUTHOR_ID}`)
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    const title = featuredPostProps.title;
    const { price, description, location, willDeliver, _id, author, } = featuredPostProps;
    // const [featuredPost, setFeaturedPost] = useState(false);

    return (
        <div key={_id}>
            <h3>{title}</h3>

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
                (token && userID !== authID)
                    ?
                    <button
                        onClick={
                            (event) => {
                                // event.preventDefault();
                                // <NewMessage
                                //     postID={_id}
                                // />
                                console.log('send a message');
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
                                    deletePost({ _id, token })
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
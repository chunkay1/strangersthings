// import { BASEURL } from "../api/accountRequests";
// import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";

function Postcard({ _id, title, price, description, location, author, isAuthor, willDeliver, postState, featuredPostProps }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const authID = author._id
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    // const [featuredPost, setFeaturedPost] = useState(false);



    return (
        <div key={_id}>
            <h3>{title}</h3>

            <span>Price: {price}</span>
            <br />

            <button
                onClick={
                    (event) => {
                        // console.log('view post')
                        // console.log(_id)

                        return (
                            {
                                state: postState(true),
                                props: featuredPostProps(title, price, description, location, willDeliver, author, isAuthor),
                            }
                            // postTitle(title)
                            // postDescription(description)
                            // postPrice(price)
                            // postLocation(location)
                            // postAuthor(author)
                            // postIsAuthor(isAuthor)
                        )

                        // setFeaturedPost(true);
                    }
                }

            > View Post</button>
            {/* <span>Description: {description}</span>
            <br />
            <span>Location: {location}</span>
            <br />
            <span>isAuthor: {isAuthor}</span> */}
            <br />

            {
                (token && userID !== authID)
                    ?
                    <button
                        onClick={
                            (event) => {
                                event.preventDefault();
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
};

export default Postcard;
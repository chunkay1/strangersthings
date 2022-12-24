// import { BASEURL } from "../api/accountRequests";
// import { useState } from "react";
import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";

function Postcard({ _id, title, price, description, location, author, isAuthor, willDeliver, postState, getFeaturedPostProps }) {
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const authID = author._id
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
                        // console.log(authID);
                        // console.log(userID);
                        // console.log(author);
                        //here, author is an object with _id & username as keys. The values would those pertaining to the post author. 

                        // console.log(isAuthor);
                        // console.log(_id)
                        //here _id is a string with the post id number. 





                        return (
                            {
                                state: postState(true),
                                props: getFeaturedPostProps(title, price, description, location, willDeliver, _id, author),
                            }

                        )


                    }
                }

            > View Post</button>

            <br />

            {/* {
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

            } */}

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
import { useState } from "react";


import EditForm from "./EditForm";
import MessageForm from "./MessageForm";

import FeaturedSingle from "./FeaturedSingle";

function FeaturedPost({ postState, featuredPostProps, setPostChange }) {
    // const userID = localStorage.getItem(`${AUTHOR_ID}`)
    // const token = localStorage.getItem(`${STORAGE_KEY}`)

    const { title, price, description, location, willDeliver, username, postID } = featuredPostProps;

    const [messageState, setMessageState] = useState(false);
    const [editState, setEditState] = useState(false);

    return (
        <div key={postID}>
            {/* <div className={styles.container}>

                <h3 className={styles.header}>{title}</h3>

                <h4 className={styles.title}>Seller: <span className={styles.content}>{username}</span></h4>


                <h4 className={styles.title}>Price: <span className={styles.content}>{price}</span></h4>


                <h4 className={styles.title}>Description: <span className={styles.content}>{description}</span></h4>

                <h4 className={styles.title}>Location: <span className={styles.content}>{location}</span></h4>

                <h4 className={styles.title}>Willing to Deliver?:<span className={styles.content}> {willDeliver}</span></h4> */}


            {
                messageState

                    ?
                    <>
                        <div>
                            <MessageForm
                                setMessageState={setMessageState}
                                postID={postID}
                            />
                        </div>
                    </>

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
                // <FeaturedSingle
                //     setMessageState={setMessageState}
                //     setEditState={setEditState}
                //     postState={postState}
                //     featuredPostProps={featuredPostProps}
                //     setPostChange={setPostChange}
                // />
            }

            {
                messageState || editState

                    ?
                    null
                    :
                    <FeaturedSingle
                        setMessageState={setMessageState}
                        setEditState={setEditState}
                        postState={postState}
                        featuredPostProps={featuredPostProps}
                        setPostChange={setPostChange}
                    />

            }

            {/* <div className={styles.buttons}>
                    {
                        (token && (userID !== authID) && !messageState)

                            ?

                            <button
                                className={styles.msgButton}
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
                                    className={styles.editButton}
                                    onClick={
                                        (event) => {
                                            setEditState(true);
                                        }
                                    }
                                >Edit</button>

                                <br />

                                <button
                                    className={styles.deleteButton}
                                    onClick={
                                        (event) => {
                                            //add an are you sure button before allowing you to actually delete the post.
                                            deletePost(token, postID);
                                            postState(false);
                                            setPostChange(true);
                                        }
                                    }
                                >Delete</button>

                            </>
                            :

                            null
                    }

                    <button
                        className={styles.closeButton}
                        onClick={
                            (event) => {
                                postState(false)
                            }
                        }
                    > Close </button>
                </div>
            </div > */}
        </div >
    )
}

export default FeaturedPost; 
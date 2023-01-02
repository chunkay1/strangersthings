import { AUTHOR_ID } from "../api/accountRequests";
import { deletePost, STORAGE_KEY } from "../api/postsRequests";
import styles from "./FeaturedSingle.module.css"

function FeaturedSingle({ postState, featuredPostProps, setPostChange, setMessageState, setEditState }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`);
    const token = localStorage.getItem(`${STORAGE_KEY}`);

    const { title, price, description, location, willDeliver, username, authID, postID } = featuredPostProps;

    return (
        <div key={postID}>
            <div className={styles.container}>

                <h3 className={styles.header}>{title}</h3>

                <h4 className={styles.title}>Seller: <span className={styles.content}>{username}</span></h4>


                <h4 className={styles.title}>Price: <span className={styles.content}>{price}</span></h4>


                <h4 className={styles.title}>Description: <span className={styles.content}>{description}</span></h4>

                <h4 className={styles.title}>Location: <span className={styles.content}>{location}</span></h4>

                <h4 className={styles.title}>Willing to Deliver?:

                    {
                        willDeliver

                            ?

                            <span className={styles.content}> Yes</span>

                            :

                            <span className={styles.content}> No</span>
                    }

                </h4>

                <div className={styles.buttons}>
                    {
                        (token && (userID !== authID))

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
                        (token && (userID === authID))

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
            </div >
        </div >
    )
}

export default FeaturedSingle; 
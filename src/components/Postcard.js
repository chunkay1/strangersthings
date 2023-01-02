import { AUTHOR_ID } from "../api/accountRequests";
import { STORAGE_KEY } from "../api/postsRequests";
import styles from "./Postcard.module.css"

function Postcard({ _id, title, price, description, location, author, isAuthor, willDeliver, postState, getFeaturedPostProps }) {
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const authID = author._id

    return (
        <div className={styles.container}>

            <div className={styles.postcard} key={_id}>
                <h4 className={styles.title}>Item: <span className={styles.titleContent}>{title}</span></h4>


                <h4 className={styles.price}>Price: <span className={styles.priceContent}>{price}</span></h4>
                <br />

                {
                    ((userID === authID) && token)

                        ?

                        <button
                            className={styles.viewButton}
                            onClick={
                                (event) => {

                                    return (
                                        {
                                            state: postState(true),
                                            props: getFeaturedPostProps(title, price, description, location, willDeliver, _id, author),
                                        }

                                    )

                                }
                            }
                        >Manage Post</button>

                        :

                        <button
                            className={styles.button}
                            onClick={
                                (event) => {

                                    return (
                                        {
                                            state: postState(true),
                                            props: getFeaturedPostProps(title, price, description, location, willDeliver, _id, author),
                                        }

                                    )

                                }
                            }
                        > View Post</button>
                }

            </div >
        </div>
    )
};

export default Postcard;
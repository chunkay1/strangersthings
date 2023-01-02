import { useEffect, useState } from "react";
import { newPost } from "../api/postsRequests";
import { STORAGE_KEY } from "../api/postsRequests";
import { setTargetValue } from "../constants/constants";
import styles from "./NewPost.module.css"


function NewPost({ setPostChange }) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [delivery, setDelivery] = useState(false);
    const [token, setToken] = useState('')


    useEffect(() => {
        const storageToken = localStorage.getItem(`${STORAGE_KEY}`);

        setToken(storageToken)
    }, [])

    const handleChange = () => {
        setDelivery(!delivery);
    }

    return (
        <>
            <div className={styles.container}>

                <h3 className={styles.header}>Fill Out the Required Fields to Create a New Post</h3>
                <form
                    className={styles.form}
                    onSubmit={
                        (event) => {
                            event.preventDefault();
                            newPost({ title, price, description, location, token, delivery });
                            setTitle('');
                            setPrice('');
                            setDescription('');
                            setLocation('');
                            setDelivery(false)
                            setPostChange(true);
                        }
                    }
                >

                    <div className={styles.inputs}>

                        <div>
                            <span className={styles.input}>
                                <label for="title">Title</label>
                                &nbsp;
                                <input
                                    className={styles.textbox}
                                    onChange={setTargetValue(setTitle)}
                                    value={title}
                                    required />
                            </span>
                        </div>

                        <div>
                            <span className={styles.input}>
                                <label for="price">Price</label>
                                &nbsp;
                                <input
                                    className={styles.textbox}
                                    onChange={setTargetValue(setPrice)}
                                    value={price}
                                    required />
                            </span>
                        </div>

                        <div>
                            <span className={styles.input}>
                                <label for="description">Description</label>
                                &nbsp;
                                <input
                                    className={styles.textbox}
                                    onChange={setTargetValue(setDescription)}
                                    value={description}
                                    required />
                            </span>
                        </div>

                        <div>
                            <span className={styles.input}>
                                <label for="location">Location</label>
                                &nbsp;
                                <input
                                    className={styles.textbox}
                                    onChange={setTargetValue(setLocation)}
                                    value={location} />
                            </span>
                        </div>

                        <div>
                            <span className={styles.input}>
                                <label for="delivery">Willing to Deliver?</label>
                                &nbsp;
                                <input

                                    className="delivery"
                                    onChange={handleChange}

                                    type="checkbox" />
                            </span>
                        </div>


                        <button className={styles.button}>Post</button>
                    </div>

                </form>
            </div>

        </>
    )
};

export default NewPost;
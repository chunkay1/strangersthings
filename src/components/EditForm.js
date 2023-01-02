import { useState } from "react";
import { setTargetValue } from "../constants/constants";
import { editPost } from "../api/postsRequests";
import { STORAGE_KEY } from "../api/accountRequests";
import styles from "./EditForm.module.css"

function EditForm({ postID, setEditState, title, username, willDeliver, price, description, location, postState, setPostChange }) {
    const [editedTitle, setEditedTitle] = useState(`${title}`);
    const [editedPrice, setEditedPrice] = useState(`${price}`);
    const [editedDescription, setEditedDescription] = useState(`${description}`);
    const [editedLocation, setEditedLocation] = useState(`${location}`);
    const [editedDelivery, setEditedDelivery] = useState(`${willDeliver}`);

    const token = localStorage.getItem(`${STORAGE_KEY}`);

    const handleChange = () => {
        setEditedDelivery(!editedDelivery);
    }

    return (
        <div className={styles.container}>

            <form
                className={styles.form}
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        editPost({ editedTitle, editedPrice, editedDescription, editedLocation, token, postID, editedDelivery })
                        setEditedTitle('');
                        setEditedPrice('');
                        setEditedDescription('');
                        setEditedLocation('');
                        setPostChange(true);
                        setEditState(false);
                        postState(false);
                    }}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <span>
                            <label
                                for="editTitle">Edit Title:</label>

                            &nbsp;

                            <input
                                className={styles.textbox}
                                type="text"
                                onChange={setTargetValue(setEditedTitle)}
                                value={editedTitle}
                                required />
                        </span>
                    </div>

                    <div className={styles.input}>
                        <span>
                            <label
                                for="editTitle">Edit Price:</label>

                            &nbsp;

                            <input
                                className={styles.textbox}
                                type="text"
                                onChange={setTargetValue(setEditedPrice)}
                                value={editedPrice}
                                required />
                        </span>
                    </div>

                    <div className={styles.input}>
                        <span>
                            <label
                                for="editTitle">Edit Description:</label>

                            &nbsp;

                            <input
                                className={styles.textbox}
                                type="text"
                                onChange={setTargetValue(setEditedDescription)}
                                value={editedDescription}
                                required />
                        </span>
                    </div>

                    <div className={styles.input}>
                        <span>
                            <label
                                for="editTitle">Edit Location:</label>

                            &nbsp;

                            <input
                                className={styles.textbox}
                                type="text"
                                onChange={setTargetValue(setEditedLocation)}
                                value={editedLocation}
                                required />
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

                </div>

                <span>
                    <button
                        className={styles.buttons}>Submit Changes</button>
                </span>
            </form>

            <button
                className={styles.buttons}
                onClick={
                    (event) => {
                        return (
                            setEditState(false)
                        )
                    }
                }
            >Cancel</button>

        </div>
    )
}

export default EditForm;
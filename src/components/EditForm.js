import { useState } from "react";
import { setTargetValue } from "../constants/constants";
import { editPost } from "../api/postsRequests";
// import { setTargetValue } from "../constants/constants";
import { STORAGE_KEY } from "../api/accountRequests";

function EditForm({ postID, setEditState, title, username, price, description, location }) {
    // const [editState, setEditState] = useState('')
    const [editedTitle, setEditedTitle] = useState(`${title}`)
    const [editedPrice, setEditedPrice] = useState(`${price}`)
    const [editedDescription, setEditedDescription] = useState(`${description}`)
    const [editedLocation, setEditedLocation] = useState(`${location}`)
    // const [editedDelivery, setEditedDelivery] = useState(null);
    const token = localStorage.getItem(`${STORAGE_KEY}`)


    return (
        <div>

            <form
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        // console.log(edit)
                        // console.log(postID)
                        // console.log(token);
                        editPost({ editedTitle, editedPrice, editedDescription, editedLocation, token, postID })
                        // setEdit('')
                        setEditedTitle('');
                        setEditedPrice('');
                        setEditedDescription('');
                        setEditedLocation('');
                        //code or helper function that returns a success message on an interval. 
                    }}>
                <span>
                    <label
                        for="editTitle">Edit Title:</label>

                    &nbsp;

                    <input
                        className="editTitle"
                        type="text"
                        onChange={setTargetValue(setEditedTitle)}
                        value={editedTitle}
                        required />
                </span>

                <br />

                <span>
                    <label
                        for="editTitle">Edit Price:</label>

                    &nbsp;

                    <input
                        className="editPrice"
                        type="text"
                        onChange={setTargetValue(setEditedPrice)}
                        value={editedPrice}
                        required />
                </span>

                <br />

                <span>
                    <label
                        for="editTitle">Edit Description:</label>

                    &nbsp;

                    <input
                        className="editDescription"
                        type="text"
                        onChange={setTargetValue(setEditedDescription)}
                        value={editedDescription}
                        required />
                </span>

                <br />

                <span>
                    <label
                        for="editTitle">Edit Location:</label>

                    &nbsp;

                    <input
                        className="editLocation"
                        type="text"
                        onChange={setTargetValue(setEditedLocation)}
                        value={editedLocation}
                        required />
                </span>

                <br />

                    //delivery checkbox goes here.

                <br />




                <span>
                    <button
                        className="editPost">Submit Changes</button>
                </span>
            </form>

            <button
                className="cancel"
                onClick={
                    (event) => {
                        console.log({ postID })
                        return (
                            setEditState(false)
                        )
                    }
                }

            >cancel/go back</button>

        </div>
    )

}

export default EditForm;
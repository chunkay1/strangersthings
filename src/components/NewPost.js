import { useEffect, useState } from "react";
import { newPost } from "../api/postsRequests";
import { STORAGE_KEY } from "../api/postsRequests";

function NewPost() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    // const [willDeliver, setDeliverStatus] = useState(null)
    const [token, setToken] = useState('')

    const setTargetValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    useEffect(() => {
        const storageToken = localStorage.getItem(`${STORAGE_KEY}`);

        setToken(storageToken)
    }, [])

    return (
        <>

            <form
                onSubmit={
                    (event) => {
                        event.preventDefault();
                        newPost({ title, price, description, location, token })
                    }}
            >

                <span>
                    <label for="title">Title</label>
                    &nbsp;
                    <input
                        className="title"
                        onChange={setTargetValue(setTitle)}
                        value={title}
                        required />
                </span>

                <span>
                    <label for="price">Price</label>
                    &nbsp;
                    <input
                        className="price"
                        onChange={setTargetValue(setPrice)}
                        value={price}
                        required />
                </span>

                <span>
                    <label for="description">Description</label>
                    &nbsp;
                    <input
                        className="description"
                        onChange={setTargetValue(setDescription)}
                        value={description}
                        required />
                </span>

                <span>
                    <label for="location">Location</label>
                    &nbsp;
                    <input
                        className="location"
                        onChange={setTargetValue(setLocation)}
                        value={location} />
                </span>

                {/* <span>
                    <label for="delivery">Willing to Deliver?</label>
                    &nbsp;
                    <input
                        className="delivery"
                        value={setTargetValue(setDeliverStatus)}
                        type="checkbox" />
                </span> */}

                <button>Post</button>

            </form>




        </>
    )
}

export default NewPost;
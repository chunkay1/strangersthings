import { STORAGE_KEY } from "../api/postsRequests";
import { AUTHOR_ID } from "../api/accountRequests";

function Postcard({ _id, title, price, description, location, author, isAuthor }) {
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const authID = author._id
    return (
        <div key={_id}>
            <h3>{title}</h3>

            <span>Price: {price}</span>
            <br />
            <span>Description: {description}</span>
            <br />
            <span>Location: {location}</span>
            <br />
            <span>isAuthor: {isAuthor}</span>
            {
                userID === authID
                    ?
                    <span>
                        <button
                        // onClick={deletePost()}
                        >Delete</button>
                    </span>

                    :

                    null


            }
        </div>
    )
}

export default Postcard;
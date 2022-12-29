import { AUTHOR_ID } from "../api/accountRequests";
import { STORAGE_KEY } from "../api/postsRequests";

function Postcard({ _id, title, price, description, location, author, isAuthor, willDeliver, postState, getFeaturedPostProps }) {
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    const userID = localStorage.getItem(`${AUTHOR_ID}`)
    const authID = author._id




    return (
        <div key={_id}>
            <h3>{title}</h3>

            {
                ((userID === authID) && token)

                    ?

                    <h5>View Post to Edit and Delete</h5>

                    :

                    null
            }

            <span>Price: {price}</span>
            <br />

            <button
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
        </div >
    )
};

export default Postcard;
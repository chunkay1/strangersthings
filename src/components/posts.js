import { useEffect, useState } from "react";
// import { URL } from "../constants/constants"
import { getPosts } from "../api/getRequests";

//URL.baseURL


function Posts() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const getPostsAsync = async () => {
            const posts = await getPosts();

            setPosts(posts)
        }
        getPostsAsync();
    }, [])


    return (
        <div>
            {
                posts.map(({ location, title, description, price, _id }) => {
                    return (
                        <div key={_id}>
                            <h3>{title}</h3>
                            <span>Price: {price}</span>
                            <br />
                            <span>Description: {description}</span>
                            <br />
                            <span>Location: {location}</span>
                        </div>
                    )

                }
                )}

        </div>
    )



};

export default Posts;
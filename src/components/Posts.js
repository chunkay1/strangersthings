import { useEffect, useState } from "react";
// import { URL } from "../constants/constants"
import { getPosts } from "../api/getRequests";
import Postcard from "./Postcard";
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

                        <Postcard
                            location={location}
                            title={title}
                            description={description}
                            price={price}
                            _id={_id}

                        />

                    )
                }
                )}

        </div>
    )



};

export default Posts;
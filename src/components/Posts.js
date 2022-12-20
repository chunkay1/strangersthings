import { useEffect, useState } from "react";
// import { URL } from "../constants/constants"
import { getPosts } from "../api/postsRequests";
import Postcard from "./Postcard";
//URL.baseURL


function Posts() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const getPostsAsync = async () => {
            const posts = await getPosts();

            setPosts(posts)
            // console.log(posts);
        }
        getPostsAsync();
    }, [])


    return (
        <div>
            {
                posts.map(({ location, title, description, price, _id, author, isAuthor }) => {
                    return (


                        <Postcard
                            location={location}
                            title={title}
                            description={description}
                            price={price}
                            _id={_id}
                            author={author}
                            isAuthor={isAuthor}

                        />

                    )
                }
                )}

        </div>
    )



};

export default Posts;
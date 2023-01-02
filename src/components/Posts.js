import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/postsRequests";
import FeaturedPost from "./FeaturedPost";
import NewPost from "./NewPost";
import Postcard from "./Postcard";
import styles from "./Posts.module.css"


function Posts({ token }) {
    const [posts, setPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(false);
    const [featuredPostProps, setFeaturedPostProps] = useState({});
    const [postChange, setPostChange] = useState(false)

    const postState = (state) => {
        setFeaturedPost(state)
    };

    const getFeaturedPostProps = (title, price, description, location, willDeliver, _id, author) => {

        setFeaturedPostProps(
            {
                title: title,
                price: price,
                description: description,
                location: location,
                willDeliver: willDeliver,
                author: author,
                username: author.username,
                authID: author._id,
                postID: _id,
            }
        )
    }

    useEffect(() => {
        const getPostsAsync = async () => {
            const posts = await getPosts();
            setPosts(posts)
        }
        getPostsAsync();
        setPostChange(false)
    }, [postChange]);

    return (
        <>
            <div className={styles.container}>


                {
                    (token && !featuredPost)

                        ?

                        <>
                            <div className={styles.newPost}>
                                <NewPost
                                    setPostChange={setPostChange} />
                                <h3 className={styles.headers}>Click 'View Post' to message a seller or manage your posts.</h3>
                            </div>
                        </>

                        :

                        null
                }

                {
                    token


                        ?

                        null

                        :

                        <>
                            <div>
                                <h3 className={styles.headers}>In order to create a post or message a seller, please <Link to={'/home'}>sign-in or create an account!</Link></h3>
                            </div>
                        </>
                }


                {

                    (!featuredPost)

                        ?

                        <div className={styles.postcards}>
                            {
                                posts.map(({ location, title, description, price, _id, author, isAuthor, willDeliver }) => {
                                    return (


                                        <Postcard
                                            key={_id}
                                            location={location}
                                            title={title}
                                            description={description}
                                            price={price}
                                            _id={_id}
                                            author={author}
                                            isAuthor={isAuthor}
                                            willDeliver={willDeliver}
                                            postState={postState}
                                            getFeaturedPostProps={getFeaturedPostProps}
                                            setPostChange={setPostChange}

                                        />

                                    )
                                }
                                )
                            }
                        </div>

                        :

                        <>
                            <div className={styles.featuredPost}>


                                <FeaturedPost
                                    postState={postState}
                                    featuredPostProps={featuredPostProps}
                                    setPostChange={setPostChange}
                                />
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default Posts

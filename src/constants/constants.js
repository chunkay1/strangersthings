import { getPosts } from "../api/postsRequests"

export const URL = {
    baseURL: "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt"
}

export const setTargetValue = (callback) => {
    return (event) => {
        callback(event.target.value)
    }
}

export const getPostsAsync = async () => {
    const posts = await getPosts();
    console.log(posts);

    return (
        posts
    )
}
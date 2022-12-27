// import { AUTHOR_ID } from "./accountRequests";
export const BASEURL = 'https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt'
export const STORAGE_KEY = 'replyToken';

//post related functions

export async function getPosts() {
    try {
        const response = await fetch(
            `${BASEURL}/posts`);
        const json = await response.json();
        // console.log(json.data.posts);


        return (
            json.data.posts
        )
    } catch (error) {
        throw error
    }

}

export async function newPost(props) {
    const token = props.token;
    const body = JSON.stringify({
        post: {
            title: props.title,
            description: props.description,
            price: props.price,
            location: props.location,
            willDeliver: props.willDeliver,
        }
    });

    try {
        const response = await fetch(
            `${BASEURL}/posts`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body,
            }
        )
        const json = await response.json();
        const post = json.data.post;
        const location = post.location;
        const id = post._id;
        const title = post.title;
        const author = post.author;
        const isAuthor = post.isAuthor;

        console.log(json);
        console.log(post);
        console.log(location);
        console.log(id);
        console.log(title);
        console.log(author);
        console.log(isAuthor);

    } catch (error) {
        console.log(error);
        console.error(error)
    }
}

export async function deletePost({ token, _id }) {
    // const token = props.token;
    // const postID = props._id;
    try {
        const response = await fetch(
            `${BASEURL}/posts/${_id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
        console.error(error)
    }

}

export async function editPost(props) {
    const token = props.token;
    const postID = props.postID;
    const body = JSON.stringify({
        post: {
            title: props.editedTitle,
            description: props.editedDescription,
            price: props.editedPrice,
            location: props.editedLocation,
            willDeliver: props.editedWillDeliver,
        }
    });
    console.log(postID)
    console.log(token)
    console.log(body)
    try {
        const response = await fetch(
            `${BASEURL}/posts/${postID}`,
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body,
            },
        );

        const json = response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
        console.error(error);
    }
}




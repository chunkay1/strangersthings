export const BASEURL = 'https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt'
export const STORAGE_KEY = 'replyToken';

export async function getPosts() {
    try {
        const response = await fetch(
            `${BASEURL}/posts`);
        const json = await response.json();

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
            willDeliver: props.delivery,
        }
    });

    try {
        await fetch(
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

    } catch (error) {
        console.error(error)
    }
}

export async function deletePost(token, _id) {
    try {
        await fetch(
            `${BASEURL}/posts/${_id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
    } catch (error) {
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
            willDeliver: props.editedDelivery,
        }
    });
    try {
        await fetch(
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
    } catch (error) {
        console.error(error);
    }
}




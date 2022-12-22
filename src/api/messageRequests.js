import { BASEURL, STORAGE_KEY } from "./postsRequests"

export async function newMessage({ message, postID }) {
    const token = localStorage.getItem(`${STORAGE_KEY}`)
    const body = JSON.stringify({
        message: {
            content: { message }
        }
    });

    try {
        const response = await fetch(
            `${BASEURL}/posts/${postID}/messages`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }
        )
        const json = await response.json();
        console.log(json)
    } catch (error) {
        console.log('error sending message');
        console.error(error)
    }
};
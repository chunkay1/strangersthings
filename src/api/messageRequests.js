import { BASEURL, STORAGE_KEY } from "./postsRequests"

export async function newMessage(message, postID) {
    const token = localStorage.getItem(`${STORAGE_KEY}`)

    const body = JSON.stringify({
        message: {
            content: message
        }
    });

    try {
        console.log(postID);
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

// fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts/5e8929ddd439160017553e06/messages', 

// {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer TOKEN_STRING_HERE'
//   },
//   body: JSON.stringify({
//     message: {
//       content: "Do you still have this?  Would you take $10 less?"
//     }
//   })
// }).then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(console.error);
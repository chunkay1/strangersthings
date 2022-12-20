import { AUTHOR_ID } from "./accountRequests";
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


//account related functions

// export async function createAccount(props) {
//     const body = JSON.stringify({
//         user: {
//             username: props.username,
//             password: props.password,
//         }
//     });

//     try {
//         const response = await fetch(
//             `${BASEURL}/users/register`,
//             {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body,
//             }
//         )
//         const json = await response.json();
//         const replyToken = json.data.token;
//         const message = json.data.message;
//         const success = json.data.success;


//         if (replyToken) {
//             localStorage.setItem(`${STORAGE_KEY}`, replyToken)
//         }
//         console.log(json)
//         // console.log(json.data.token)
//         console.log(replyToken);
//         console.log(message);
//         console.log(success);

//     } catch (error) {
//         console.log('Failed to Register')
//         console.error(error)
//     }

// }

// export async function logIn(props) {
//     const body = JSON.stringify({
//         user: {
//             username: props.username,
//             password: props.password,
//         }
//     });

//     try {
//         const response = await fetch(
//             `${BASEURL}/users/login`,
//             {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body,
//             }
//         )
//         const json = await response.json();
//         const replyToken = json.data.token;
//         const message = json.data.message;
//         const success = json.data.success;


//         if (replyToken) {
//             localStorage.setItem(`${STORAGE_KEY}`, replyToken)
//         }
//         console.log(json)
//         console.log(replyToken);
//         console.log(message);
//         console.log(success);

//     } catch (error) {
//         console.log('Failed to Log In')
//         console.error(error)
//     }

// }

// export function logOut() {
//     localStorage.clear();
// }




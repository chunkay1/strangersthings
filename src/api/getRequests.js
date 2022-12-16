export const BASEURL = 'https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt'


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

export async function createAccount(props) {
    const body = JSON.stringify({
        user: {
            username: props.username,
            password: props.password,
        }
    });

    try {
        const response = await fetch(
            `${BASEURL}/users/register`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        // const replyToken = data.data.data.token;

        console.log(json)
        // console.log(json.data.token)
        // console.log(replyToken);
    } catch (error) {
        console.log('Failed to Register')
        console.error(error)
    }

}
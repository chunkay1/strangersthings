export const BASEURL = 'https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt'
export const STORAGE_KEY = 'replyToken';
export const AUTHOR_ID = 'authorID';

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
        const replyToken = json.data.token;


        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

    } catch (error) {
        console.log('Failed to Register')
        console.error(error)
    }

}

export async function logIn(props) {

    const body = JSON.stringify({
        user: {
            username: props.username,
            password: props.password,
        }
    });

    try {
        const response = await fetch(
            `${BASEURL}/users/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body,
            }
        )
        const json = await response.json();
        const replyToken = json.data.token;


        if (replyToken) {
            localStorage.setItem(`${STORAGE_KEY}`, replyToken)
        }

        return (
            replyToken
        )

    } catch (error) {
        console.log('Failed to Log In')
        console.error(error)
    }
}

export function logOut() {
    localStorage.clear();
}

export async function myProfile(props) {
    const token = props.token;
    try {
        const response = await fetch(
            `${BASEURL}/users/me`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        const json = await response.json();
        const authorID = json.data._id;
        const data = json.data;
        const messages = data.messages

        if (authorID) {
            localStorage.setItem(`${AUTHOR_ID}`, authorID)
        }

        return (
            messages
        )

    } catch (error) {
        console.log('failed to load profile');
        console.error(error);
    }

}



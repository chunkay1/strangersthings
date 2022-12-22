
function Profile(props) {
    const username = props.username;
    const token = props.token;
    const messages = props.messages;

    return (
        <div>
            <h1>Welcome back, {username}</h1>

            <span>{token}</span>
            {/* <span><Messages
                messages={messages}
            /></span> */}
        </div>
    )
};

export default Profile;
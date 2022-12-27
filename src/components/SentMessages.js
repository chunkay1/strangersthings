function SentMessages({ content, fromUser, post, _id, token, user }) {
    const title = post.title
    const senderID = fromUser._id;

    if (user === senderID) {
        return (
            <div>
                <span>Subject: {title}</span>
                <span>Message: {content} </span>
            </div>
        )
    } else {
        return (
            null
        )
    }



}

export default SentMessages;
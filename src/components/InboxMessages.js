function InboxMessages({ content, fromUser, post, _id, token, user }) {

    const senderName = fromUser.username
    const title = post.title
    const senderID = fromUser._id;

    if (user !== senderID) {
        return (
            <div>

                <span>From: {senderName} </span>
                <span>Subject: {title} </span>
                <span>Message: {content}  </span>


            </div>
        )
    } else {
        return (
            null
        )
    }
}

export default InboxMessages;
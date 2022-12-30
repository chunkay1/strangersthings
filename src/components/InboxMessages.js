import styles from "./InboxMessages.module.css"

function InboxMessages({ content, fromUser, post, _id, token, user }) {

    const senderName = fromUser.username
    const title = post.title
    const senderID = fromUser._id;

    if (user !== senderID) {
        return (
            <div className={styles.messageCard}>
                <div className={styles.messageHeaders}>
                    <span className={styles.messageLabels}>From: </span>
                    <span className={styles.content} >{senderName}</span>

                    <span className={styles.messageLabels}>Subject: </span>
                    <span className={styles.content}>{title} </span>
                </div>

                <div className={styles.contentCard}>
                    <span className={styles.messageLabels}>Message: </span>
                    <span className={styles.content}>{content}  </span>
                </div>

            </div>
        )
    } else {
        return (
            null
        )
    }
}

export default InboxMessages;
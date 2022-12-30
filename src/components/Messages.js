import SentMessages from "./SentMessages";
import InboxMessages from "./InboxMessages";
import styles from "./Messages.module.css"




function Messages({ messages, user }) {
    return (
        <>
            <div className={styles.container}>

                <h3 className={styles.headers}>Inbox</h3>

                <div className={styles.messages}>
                    {
                        messages.map(({ content, fromUser, post, _id }) => {

                            return (
                                <InboxMessages
                                    key={_id}
                                    content={content}
                                    fromUser={fromUser}
                                    post={post}
                                    user={user}
                                />

                            )
                        })
                    }
                </div>

                <br />

                <h3 className={styles.headers}>Sent Messages:</h3>
                <div className={styles.messages}>
                    {
                        messages.map(({ content, fromUser, post, _id }) => {

                            return (
                                <SentMessages
                                    key={_id}
                                    content={content}
                                    fromUser={fromUser}
                                    post={post}
                                    user={user}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Messages
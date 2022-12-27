import SentMessages from "./SentMessages";
import InboxMessages from "./InboxMessages";




function Messages({ messages, user }) {
    return (
        <>

            <h3>Sent Messages:</h3>
            <br />
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


            <h3>Inbox</h3>
            <br />
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
        </>
    )
}

export default Messages
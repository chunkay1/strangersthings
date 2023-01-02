import { useState } from "react";

import EditForm from "./EditForm";
import MessageForm from "./MessageForm";

import FeaturedSingle from "./FeaturedSingle";

function FeaturedPost({ postState, featuredPostProps, setPostChange }) {
    const { title, price, description, location, willDeliver, username, postID } = featuredPostProps;

    const [messageState, setMessageState] = useState(false);
    const [editState, setEditState] = useState(false);

    return (
        <div key={postID}>

            {
                messageState

                    ?
                    <>
                        <div>
                            <MessageForm
                                setMessageState={setMessageState}
                                postID={postID}
                            />
                        </div>
                    </>

                    :

                    null
            }

            {
                editState

                    ?

                    <EditForm
                        setEditState={setEditState}
                        postID={postID}
                        title={title}
                        username={username}
                        price={price}
                        description={description}
                        location={location}
                        willDeliver={willDeliver}
                        postState={postState}
                        setPostChange={setPostChange}
                    />

                    :
                    null
            }

            {
                messageState || editState

                    ?
                    null
                    :
                    <FeaturedSingle
                        setMessageState={setMessageState}
                        setEditState={setEditState}
                        postState={postState}
                        featuredPostProps={featuredPostProps}
                        setPostChange={setPostChange}
                    />
            }
        </div >
    )
}

export default FeaturedPost; 
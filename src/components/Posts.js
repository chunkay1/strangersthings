import { useEffect, useState } from "react";
// import { URL } from "../constants/constants"
import { getPosts } from "../api/postsRequests";
import FeaturedPost from "./FeaturedPost";
import Postcard from "./Postcard";
//URL.baseURL


function Posts() {
    const [posts, setPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState(false);
    const [featuredPostProps, setFeaturedPostProps] = useState({});


    useEffect(() => {
        const getPostsAsync = async () => {
            const posts = await getPosts();

            setPosts(posts)
            // console.log(posts);
        }
        getPostsAsync();
    }, []);

    const postState = (state) => {
        // console.log(state)
        // console.log('this is happening in posts')
        setFeaturedPost(state)
    };

    const getFeaturedPostProps = (title, price, description, location, willDeliver, _id, author) => {
        
        // console.log(title)
        // console.log(price)
        // console.log(description)
        // console.log(location)
        // console.log(willDeliver)
        // console.log(_id)
        // console.log(author)
        // console.log(_id.username)
        // console.log(_id._id)
        // console.log(author)

        
        //   setFeaturedPostProps(  
        //         {
        //             title: title,
        //             price: price, 
        //             description: description,
        //             location: location, 
        //             willDeliver: willDeliver, 
        //             author: author,
        //             username: _id.username, 
        //             authID: _id._id,
        //             postID: _id,
        //         }
        //     )

            setFeaturedPostProps(  
                {
                    title: title,
                    price: price, 
                    description: description,
                    location: location, 
                    willDeliver: willDeliver, 
                    author: author,
                    username: author.username, 
                    authID: author._id,
                    postID: _id,
                }
            )
    
        
    }

    // const {key, location, title, description, price, _id, author, isAuthor} = featuredPostProps();

    return (
    <>
    
    {
        
        (!featuredPost)
        
        ?
        
            
            <div>
                
                {
                    posts.map(({ location, title, description, price, _id, author, isAuthor, willDeliver }) => {
                        return (
    
                            
                            <Postcard
                                key={_id}
                                location={location}
                                title={title}
                                description={description}
                                price={price}
                                _id={_id}
                                author={author}
                                isAuthor={isAuthor}
                                willDeliver= {willDeliver}
                                postState={postState}
                                getFeaturedPostProps={getFeaturedPostProps}
    
                            />
                            
                        )
                    }
                    )}
    
            </div>
        
    
        :
        

        
        
        
        <FeaturedPost
        postState={postState}
        featuredPostProps={featuredPostProps}
        test={'test'} />

                
    
    }
    
    </>
    )
}
//     return (


//         <div>
            
//             {
//                 posts.map(({ location, title, description, price, _id, author, isAuthor }) => {
//                     return (

                        
//                         <Postcard
//                             key={_id}
//                             location={location}
//                             title={title}
//                             description={description}
//                             price={price}
//                             _id={_id}
//                             author={author}
//                             isAuthor={isAuthor}
//                             postState={postState}

//                         />
                        
//                     )
//                 }
//                 )}

//         </div>
//     )



// };

export default Posts

// {

//     !featuredPost
    
//     ?


//         <div>
            
//             {
//                 posts.map(({ location, title, description, price, _id, author, isAuthor }) => {
//                     return (

                        
//                         <Postcard
//                             key={_id}
//                             location={location}
//                             title={title}
//                             description={description}
//                             price={price}
//                             _id={_id}
//                             author={author}
//                             isAuthor={isAuthor}
//                             postState={postState}

//                         />
                        
//                     )
//                 }
//                 )}

//         </div>
    

//     :

//     <FeaturedPost />

// }
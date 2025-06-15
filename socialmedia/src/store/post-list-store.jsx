import { createContext, useCallback, useReducer,useEffect,useState } from "react";
//import PostList from "../components/PostList";

 export const PostListData= createContext({
    postList: [],
    fetching: false,
    addPost: ()=> {},
   // addInitialPost: ()=> {},
    deletePost: ()=> {},
});

const postListReducer = (curentPostList, action) => {
    let newPostList =curentPostList;
    
    if (action.type === "DELETE_POST") {
        console.log(`Delete post with ID: ${action.payload}`);
        newPostList = curentPostList.filter(post => post.id !== action.payload);
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        console.log("Adding initial posts");
        newPostList = action.payload.posts;
    }
     else if (action.type === "ADD_POST") {

        newPostList = [action.payload, ...curentPostList];

     }
    return newPostList;
};

const PostListProvide =({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const [fetching, setFetching] = useState(false);
    
    const addPost = (post) => {

        console.log("sfifu8e",post);
        dispatchPostList({
            type: "ADD_POST",
            payload: post,
        });
    
    };

    const addInitialPost = (posts) => {

       // console.log(`${userID}, ${postTitle}, ${postContent}, ${postReaction}, ${postTag}`);
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: 
            {
                posts: posts.map(post => ({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    reactions: post.reactions.likes,
                    userId: `user-${post.userId}`,
                    tags: post.tags || [],
                })),
            }
        });
    
    };

    const deletePost = useCallback((postID) => {
        dispatchPostList(
            {type: "DELETE_POST",
                 payload: postID,
                });
        //console.log(`Delete post with ID: ${postID}`);
       
    },[dispatchPostList]);

    useEffect(() => {
          setFetching(true);
          const controller = new AbortController();
          const signal = controller.signal;
          console.log("Fetchingstarted... ",{signal});
          fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => {
            //console.log(data.posts);
            addInitialPost(data.posts);
            setFetching(false);
            //console.log("Fetching underway ");
         //console.log("Fetching posts from server...");   
               });

               return () => {
                    controller.abort();
                   console.log("Fetching aborted... ");
               }
        }, []);



    return (
        <PostListData.Provider value={{ 
            postList, fetching, addPost, deletePost }}>
            {children}
        </PostListData.Provider>
    );

};


/*const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: "Wellcome to mumbai",
        content: "Above the sea face, Mumbai is a city that never sleeps. It is a city of dreams, where the hustle and bustle of life never stops. The city is known for its vibrant culture, rich history, and diverse population.",
        reactions: 2,
        userid: "user-5",
        tags : ["mumbai", "dreamcity"],
    },
{
        id: 2,
        title: "Wellcome to delhi",
        content: "Delhi is the capital of India and is known for its rich history, culture, and heritage. The city is a melting pot of different cultures and traditions, making it a unique place to visit.",
        reactions: 5,
        userid: "user-6",
        tags : ["delhi", "capital"],
    },
];*/


export default PostListProvide;
import { createContext, useReducer } from "react";
import PostList from "../components/PostList";

 export const PostListData= createContext({
    postList: [],
    addPost: ()=> {},
    deletePost: ()=> {},
});

const postListReducer = (curentPostList, action) => {
    let newPostList =curentPostList;
    
    if (action.type === "DELETE_POST") {
        console.log(`Delete post with ID: ${action.payload}`);
        newPostList = curentPostList.filter(post => post.id !== action.payload);
    }
     else if (action.type === "ADD_POST") {

        newPostList = [action.payload, ...curentPostList];

     }
    return newPostList;
};

const PostListProvide =({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    
    const addPost = (userID, postTitle, postContent, postReaction, postTag) => {

       // console.log(`${userID}, ${postTitle}, ${postContent}, ${postReaction}, ${postTag}`);
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Math.random().toString(),
                title: postTitle,
                content: postContent,
                reactions: postReaction,
                userid: userID,
                tags: postTag,
            }
        });
    
    };

    const deletePost = (postID) => {
        dispatchPostList(
            {type: "DELETE_POST",
                 payload: postID,
                });
        //console.log(`Delete post with ID: ${postID}`);
       
    };

    return (
        <PostListData.Provider value={{ 
            postList, addPost,deletePost }}>
            {children}
        </PostListData.Provider>
    );

};


const DEFAULT_POST_LIST = [
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
];


export default PostListProvide;
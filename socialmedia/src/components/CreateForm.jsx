import {useContext, useRef } from "react";
import {PostListData}  from "../store/post-list-store";

const CreateForm = () => {
    
  const {addPost} = useContext(PostListData);

  
     const userIDElement=useRef();
     const postTitleElement=useRef();
     const postContentElement=useRef();
     const postReactionElement=useRef();
     const postTagsElement=useRef();
       const handleSubmit= (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postContent = postContentElement.current.value;
        const postReaction = postReactionElement.current.value;
        const postTags = postTagsElement.current.value.split(" ");

        userIDElement.current.value = '';
        postTitleElement.current.value = '';  
        postContentElement.current.value = '';
        postReactionElement.current.value = '';
        postTagsElement.current.value = '';

       // console.log(`UserID: ${userID}, PostTitle: ${postTitle}, PostContent: ${postContent}, PostReaction: ${postReaction}, PostTags: ${postTags}`);
        addPost(userID, postTitle, postContent, postReaction, postTags);
 
  }; 
    return (
       <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="userid" className="form-label">User ID</label>
    <input ref={userIDElement} type="text" className="form-control" id="userid" placeholder="how are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="how are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="content" className="form-label">Content</label>
    <textarea ref={postContentElement} type="text" rows="4" className="form-control" id="Content" placeholder="Write your body here..." />
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">Reaction</label>
    <input ref={postReactionElement} type="text" className="form-control" id="reaction" placeholder="Enter your reaction" />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Hastags</label>
    <input ref={postTagsElement} type="text" className="form-control" id="tags" placeholder="Entre your tags" />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
    };
export default CreateForm;
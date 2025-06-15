import {useContext, useRef } from "react";
import {PostListData}  from "../store/post-list-store";

const CreateForm = () => {
    
  const {addPost} = useContext(PostListData);

  
     const userIDElement=useRef();
     const postTitleElement=useRef();
     const postbodyElement=useRef();
     const postReactionElement=useRef();
     const postTagsElement=useRef();
       const handleSubmit= (event) => {
        event.preventDefault();
        console.log("Form submitted");
        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postbody = postbodyElement.current.value;
        const postReaction = postReactionElement.current.value;
        const postTags = postTagsElement.current.value.split(" ");

       // userIDElement.current.value = '';
       // postTitleElement.current.value = '';  
        //postbodyElement.current.value = '';
        //postReactionElement.current.value = '';
        //postTagsElement.current.value = '';

        fetch('https://dummyjson.com/posts/add', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({
                // id: Math.random().toString(),
                userId: userID,
                title: postTitle,
                body: postbody,
                reactions: postReaction,
                tags: postTags,
    /* other post data */
                                })
              })
                 .then(res => res.json())
                 .then(post => {
                  console.log("Post added successfully:", post);
                  addPost(post)});
                       

       // console.log(`UserID: ${userID}, PostTitle: ${postTitle}, Postbody: ${postbody}, PostReaction: ${postReaction}, PostTags: ${postTags}`);
        //addPost(userID, postTitle, postbody, postReaction, postTags);
 
  }; 
    return (
       <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="userId" className="form-label">User ID</label>
    <input ref={userIDElement} type="text" className="form-control" id="userId" placeholder="how are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="how are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">body</label>
    <textarea ref={postbodyElement} type="text" rows="4" className="form-control" id="body" placeholder="Write your body here..." />
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
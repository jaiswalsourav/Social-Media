import { use, useContext } from "react";
import {MdDelete } from "react-icons/md";
import { PostListData } from "../store/post-list-store";
const Post = ({post}) => {

  const {deletePost}=useContext(PostListData);
  return ( 
    <div className="card post-card" style={{width: "30rem"}}>
      
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      onClick={() => post.onDelete(post.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.content}</p>

    {post.tags.map((tags)=>(<span className="badge bg-secondary me-1">{tags}</span>))}
    <div className="alert alert-warning" role="alert">
     {post.reactions}
    </div>
  </div>
</div>
);
};
export default Post;

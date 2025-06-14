import Post from './Post';
import { useContext } from 'react';
import { PostListData} from '../store/post-list-store';
import WellcomeMessage from './Wellcomemessage';
const PostList =() => {

     const {postList,addInitialPost}= useContext(PostListData);
       //console.log(postList);

       const handleGetPostServer= () => {
         // This function can be used to fetch posts from a server
         // For now, we will just log a message
         console.log("Fetching posts from server...");
         fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => {
            console.log(data.posts);
            addInitialPost(data.posts);
          });
       };
  return (
   <>
      {postList.length === 0 && <WellcomeMessage onGetPostServer={handleGetPostServer}/>}
        {postList.map((post) => 
            <Post key={post.id} post={post}/>
    )}
  </>
  );
};

export default PostList;
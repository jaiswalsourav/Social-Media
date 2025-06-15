import Post from './Post';
import { useState } from 'react';
import { useContext } from 'react';
import { PostListData} from '../store/post-list-store';
import WellcomeMessage from './Wellcomemessage';
const PostList =() => {

     const {postList,addInitialPost}= useContext(PostListData);
       //console.log(postList);
       const [datafetchd, setDataFetched] = useState(false);

       if(!datafetchd) {
         // Fetch posts from the server only once
         // This will prevent multiple fetch calls on re-render
         // and will only run when the component mounts
         // or when datafetchd is false
          fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => {
            //console.log(data.posts);
            addInitialPost(data.posts);
         //console.log("Fetching posts from server...");   
               }
         );
             setDataFetched(true);
            };
      

      // const handleGetPostServer= () => {};
  return (
   <>
      {postList.length === 0 && <WellcomeMessage/>}
        {postList.map((post) => 
            <Post key={post.id} post={post}/>
    )}
  </>
  );
};

export default PostList;
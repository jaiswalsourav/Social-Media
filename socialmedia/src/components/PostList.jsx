import Post from './Post';
//import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { PostListData,} from '../store/post-list-store';
import WellcomeMessage from './Wellcomemessage';
import LoadingSign from './LoadingSign';
const PostList =() => {

     const {postList,fetching}= useContext(PostListData);
       console.log(postList);
      

         
        

      // const handleGetPostServer= () => {};
  return (
   <>
       {fetching && <LoadingSign/>}
      {!fetching && postList.length === 0 && <WellcomeMessage/>}
        {!fetching && postList.map((post) => 
        <Post key={post.id} post={post}/>
    )}
  </>
  );
};

export default PostList;
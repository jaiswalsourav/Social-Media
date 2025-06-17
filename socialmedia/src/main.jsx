import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App  from './routes/App.jsx'
import PostList from './components/PostList.jsx'
import CreateForm from './components/CreateForm.jsx'
//import PostList from './components/PostList.jsx'
//import PostListProvide from './store/post-list-store.jsx'
const router= createBrowserRouter([
  { path: '/', element: <App /> ,
    children: [
    {path:'/', element: <PostList />},
    {path: '/create-post', element: <CreateForm />},],
  },
]);
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  
)

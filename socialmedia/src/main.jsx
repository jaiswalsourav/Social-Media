import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import PostList from './components/PostList.jsx'
import PostListProvide from './store/post-list-store.jsx'

createRoot(document.getElementById('root')).render(
  <PostListProvide>
  <StrictMode>
    <App />
  </StrictMode>,
  </PostListProvide>
)

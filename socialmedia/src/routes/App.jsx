import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from  "../components/Footer";
import Sidebar from "../components/Sidebar";
import  "./App.css";
import { Outlet } from "react-router-dom";      
import CreateForm from "../components/CreateForm";
import PostList from "../components/PostList";
import {useState} from "react";
import PostListProvide from "../store/post-list-store";

function App() {
  const [selectedTab,setselectedTab]=useState("Home");
  return (
    <PostListProvide>
     <div className="app-container">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}/>
        <div className="content-container">
        <Header />
          <Outlet/>
         <Footer/>
      </div>
     </div>
     </PostListProvide>
    
  );
}

export default App;

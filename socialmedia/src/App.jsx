import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CreateForm from "./components/CreateForm";

import PostList from "./components/PostList";
import {useState} from "react";

function App() {
  const [selectedTab,setselectedTab]=useState("Home");
  return (
     <div className="app-container">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}/>
        <div className="content-container">
        <Header />
        {selectedTab === "Home" ? <PostList/> : <CreateForm />}
        
        <Footer />
      </div>
     </div>
    
  )
}

export default App

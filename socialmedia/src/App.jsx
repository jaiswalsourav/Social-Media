import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CreateForm from "./components/CreateForm";
import Post from "./components/Post";

function App() {

  return (
     <div className="app-container">
      <Sidebar />
        <div className="content-container">
        <Header />
        <Post/>
        <CreateForm />
        <Footer />
      </div>
     </div>
    
  )
}

export default App

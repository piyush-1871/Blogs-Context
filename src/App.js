import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pageination from "./components/Pageination";
import { AppContext } from "./context/AppContext";
import './App.css'


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

// eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  
  return <div className="w-full h-screen flex flex-col">
    <Header />
    <Blogs />
    <Pageination />
  </div>;
}

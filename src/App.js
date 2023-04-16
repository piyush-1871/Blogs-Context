import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pageination from "./components/Pageination";
import { AppContext } from "./context/AppContext";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  
  return <div>
    <Header />
    <Blogs />
    <Pageination />
  </div>;
}

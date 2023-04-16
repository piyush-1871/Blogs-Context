import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pageination from "./components/Pageination";
import { AppContext } from "./context/AppContext";
import './App.css'
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);

  
  return <div className="w-full h-screen flex flex-col">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<Tag />} />
      <Route path="/categories/:category" element={<CategoryPage />} />

    </Routes>
  </div>;
}

import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState();
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const {setLoading, loading, baseUrl} = useContext(AppContext);
    const location = useLocation();
    const navigation = useNavigate();
    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            console.log(data);
        }catch(err){
            console.log(err);
            setBlog(null);
            setRelatedBlogs(null);
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname]);
  return (
    <div>
        <Header />
        <div>
            <button onClick={()=> navigation(-1)}>Back</button>
            <div className="">
                {loading ? (
                    <div>
                        <p>Loading</p>
                    </div>
                ) : (
                    blog ? (
                        <div>
                            <BlogDetails post={blog} />
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post)=>(
                                    <div key={post.id}><BlogDetails post={post} /></div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            <p>No Blog Found</p>
                        </div>
                    )
                )
                }
            </div>
        </div>
    </div>
  )
}

export default BlogPage
import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pageination from '../components/Pageination';

function TagPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);
  return (
    <div>
        <Header />
        <div className="">
            <button className="" onClick={()=> navigation(-1)}>Back</button>
            <h2>Blogs Tagged <span className="">#{tag}</span></h2>
        </div>
        <Blogs />
        <Pageination />
    </div>
  )
}

export default TagPage
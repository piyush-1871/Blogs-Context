import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pageination from '../components/Pageination'
import { useLocation, useNavigate } from 'react-router-dom';

function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
  return (
    <div>
        <Header />
        <div className="">
            <button className="" onClick={()=> navigation(-1)}>Back</button>
            <h2>Blogs Tagged <span className="">{category}</span></h2>
        </div>
        <Blogs />
        <Pageination />
    </div>
  )
}

export default CategoryPage
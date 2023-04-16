import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pageination from '../components/Pageination'

function Home() {
  return (
    <div>
        <Header />
        <Blogs />
        <Pageination />
    </div>
  )
}

export default Home
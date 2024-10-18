import React from 'react'
import './Blogs.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import BlogCard from '../BlogCard/BlogCard'

function Blogs() {
  return (
    <div className='blogs_main padded' id='blogs'>
        <SectionHeading h2="Blog" span="Post" />
        <div className="blogcards">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>  
    </div>
  )
}

export default Blogs

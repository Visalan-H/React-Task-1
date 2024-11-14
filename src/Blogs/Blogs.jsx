import React, { useRef } from 'react'
import './Blogs.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import BlogCard from '../BlogCard/BlogCard'

function Blogs() {
  const scrollRef = useRef(null);
  const handleScroll = (dir) => {
    const {current} = scrollRef;
    console.log("curr", current)
    if (dir === 'l') {
      current.scrollLeft -= 425;
    } else {
      current.scrollLeft += 425;
    }
  }
  return (
    <div className='blogs_main padded' id='blogs'>
      <SectionHeading h2="Blog" span="Post" />
      <div className="blogcardd">
        <div className="icons">
          <i className='fa fa-chevron-left' onClick={() => handleScroll('l')}></i>
          <i className='fa fa-chevron-right' onClick={() => handleScroll('r')}></i>
        </div>
        <div className='blogcards' ref={scrollRef}>
          <BlogCard src="./assets/cat20.jpg" />  
          <BlogCard src="./assets/cat21.jpg" />
          <BlogCard src="./assets/cat22.jpg" />
          <BlogCard src="./assets/cat23.jpg" />
          <BlogCard src="./assets/cat24.jpg" liberty={true}/>
          <BlogCard src="./assets/cat25.jpg" />
          <BlogCard src="./assets/cat26.jpg" />
          <BlogCard src="./assets/cat27.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Blogs

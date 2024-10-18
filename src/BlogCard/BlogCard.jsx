import React from 'react'
import './BlogCard.css'

function BlogCard(props) {
  return (
    <div className='blogcard_main'>
        <div className="image">
            <img src="https://via.placeholder.com/300"/>
        </div>
        <div className="blog_content">
        <h4>Lorem ipsum dolor sit amet </h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto vero magni...     <span>Read More &gt;&gt;</span></p>
        </div>
        <div className="metadata">
            <div className="author">
                <i className='fa fa-user'></i>
                <h5>The Batman</h5>
            </div>
            <div className="date">
                <i className='fa fa-calendar'></i>
                <h5>Oct 31, 2024</h5>
            </div>
            <div className="comments">
                <i className='fa fa-message'></i>
                <h5>8</h5>
            </div>
        </div>

    </div>
  )
}

export default BlogCard

import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350']},
        { category: 'Photography', imgs: ['https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350'] },
        { category: 'Websites', imgs: ['https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350']},
        { category: 'Art', imgs: ['https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350']},
    ];

    const categories = ['All', 'Illustrations', 'Photography', 'Websites', 'Art'];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const [hoveredCategory,setHoveredCategory] = useState('');

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className='portfolio_main padded'>
            <SectionHeading h2="Portfolio" span="Gallery" />

            <div className="gallery">
                <div className="categories">
                    {categories.map(category => (
                        <div
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`category ${selectedCategory === category && hoveredCategory === category ? 'active' : ''}`}
                            onMouseOver={()=>setHoveredCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                {/* <div className="items">
                    {filteredItems.map((item,i) => (
                        <div key={i} className="item">
                            {item.imgs.map((img,ii)=>(
                                <div className="image">
                                <img src={img} key={ii}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

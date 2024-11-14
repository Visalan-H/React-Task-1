import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Categories from '../Categories/Categories.jsx'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['src/assets/cat5.jpg', 'src/assets/cat6.jpg', 'src/assets/cat7.jpg', 'src/assets/cat8.jpg'] },
        { category: 'Photography', imgs: ['src/assets/cat9.jpg', 'src/assets/cat10.jpg', 'src/assets/cat11.jpg', 'src/assets/cat12.jpg'] },
        { category: 'Websites', imgs: ['src/assets/cat13.jpg', 'src/assets/cat14.jpg', 'src/assets/cat15.jpg', 'src/assets/cat16.jpg'] },
        { category: 'Art', imgs: ['src/assets/cat17.jpg', 'src/assets/cat18.jpg', 'src/assets/cat19.jpg', 'src/assets/cat20.jpg'] }
    ];


    const categories = [
        { name: 'all', label: 'All' },
        { name: 'illustrations', label: 'Illustrations' },
        { name: 'photography', label: 'Photography' },
        { name: 'websites', label: 'Websites' },
        { name: 'art', label: 'Art' }
    ];
    
    return (
        <div className='portfolio_main padded' id='portfolio'>
            <SectionHeading h2="Portfolio" span="Gallery" color="white"/>

            <div className="gallery">
                <Categories categories={categories} galleryItems={galleryItems}/>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Categories from '../Categories/Categories.jsx'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['./assets/cat5.jpg', './assets/cat6.jpg', './assets/cat7.jpg', './assets/cat8.jpg'] },
        { category: 'Photography', imgs: ['./assets/cat9.jpg', './assets/cat10.jpg', './assets/cat11.jpg', './assets/cat12.jpg'] },
        { category: 'Websites', imgs: ['./assets/cat13.jpg', './assets/cat14.jpg', './assets/cat15.jpg', './assets/cat16.jpg'] },
        { category: 'Art', imgs: ['./assets/cat17.jpg', './assets/cat18.jpg', './assets/cat19.jpg', './assets/cat20.jpg'] }
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

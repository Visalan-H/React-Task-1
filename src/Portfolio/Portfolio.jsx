import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Categories from '../Categories/Categories.jsx'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350','https://via.placeholder.com/350']},
        { category: 'Photography', imgs: ['https://via.placeholder.com/250','https://via.placeholder.com/250','https://via.placeholder.com/250','https://via.placeholder.com/250','https://via.placeholder.com/250','https://via.placeholder.com/250'] },
        { category: 'Websites', imgs: ['https://via.placeholder.com/200','https://via.placeholder.com/200','https://via.placeholder.com/200','https://via.placeholder.com/200','https://via.placeholder.com/200','https://via.placeholder.com/200']},
        { category: 'Art', imgs: ['https://via.placeholder.com/300','https://via.placeholder.com/300','https://via.placeholder.com/300','https://via.placeholder.com/300','https://via.placeholder.com/300','https://via.placeholder.com/300']},
    ];

    const categories = [
        { name: 'all', label: 'All' },
        { name: 'illustrations', label: 'Illustrations' },
        { name: 'photography', label: 'Photography' },
        { name: 'websites', label: 'Websites' },
        { name: 'art', label: 'Art' }
    ];
    
    return (
        <div className='portfolio_main padded'>
            <SectionHeading h2="Portfolio" span="Gallery" />

            <div className="gallery">
                <Categories categories={categories} galleryItems={galleryItems}/>
            </div>
        </div>
    )
}

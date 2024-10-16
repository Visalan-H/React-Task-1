import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Categories from '../Categories/Categories.jsx'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['https://via.placeholder.com/250/ff5733/ffffff?text=Illustration1', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustration2', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustration3', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustration4'] },
        { category: 'Photography', imgs: ['https://via.placeholder.com/250/33c1ff/ffffff?text=Photo1', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photo2', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photo3', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photo4'] },
        { category: 'Websites', imgs: ['https://via.placeholder.com/250/00cc44/ffffff?text=Website1', 'https://via.placeholder.com/250/00cc44/ffffff?text=Website2', 'https://via.placeholder.com/250/00cc44/ffffff?text=Website3', 'https://via.placeholder.com/250/00cc44/ffffff?text=Website4'] },
        { category: 'Art', imgs: ['https://via.placeholder.com/250/9933ff/ffffff?text=Art1', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art2', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art3', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art4'] }
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

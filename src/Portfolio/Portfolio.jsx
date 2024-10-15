import React, { useState } from 'react'
import './Portfolio.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Categories from '../Categories/Categories.jsx'

export default function Portfolio() {

    const galleryItems = [
        { category: 'Illustrations', imgs: ['https://via.placeholder.com/250/ff5733/ffffff?text=Illustrations', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustrations', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustrations', 'https://via.placeholder.com/250/ff5733/ffffff?text=Illustrations'] },
        { category: 'Photography', imgs: ['https://via.placeholder.com/250/33c1ff/ffffff?text=Photography', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photography', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photography', 'https://via.placeholder.com/250/33c1ff/ffffff?text=Photography'] },
        { category: 'Websites', imgs: ['https://via.placeholder.com/250/00cc44/ffffff?text=Websites', 'https://via.placeholder.com/250/00cc44/ffffff?text=Websites', 'https://via.placeholder.com/250/00cc44/ffffff?text=Websites', 'https://via.placeholder.com/250/00cc44/ffffff?text=Websites'] },
        { category: 'Art', imgs: ['https://via.placeholder.com/250/9933ff/ffffff?text=Art', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art', 'https://via.placeholder.com/250/9933ff/ffffff?text=Art'] }
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
            <SectionHeading h2="Portfolio" span="Gallery" color="white"/>

            <div className="gallery">
                <Categories categories={categories} galleryItems={galleryItems}/>
            </div>
        </div>
    )
}

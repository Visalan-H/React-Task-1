import React from 'react'
import './Categories.css'
import { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Categories(props) {

    const [selectedCategory, setSelectedCategory] = useState(props.categories[0].name);
    const [hoveredCategory, setHoveredCategory] = useState();

    const filteredItems = props.galleryItems
        ? (selectedCategory === 'all'
            ? props.galleryItems
            : props.galleryItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase()))
        : []; 

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    const handleHover = (category) => {
        setHoveredCategory(category);
    }
    return (
        <div className="categories_main">
            <div className='categories'>
                {props.categories.map((category) => (
                    <div key={category.name}
                        className={`category ${hoveredCategory === category.name && selectedCategory === category.name ? 'active' : ''}`}
                        onClick={() => handleClick(category.name)}
                        onMouseOver={() => handleHover(category.name)}>

                        <span><i className={category.icon}></i>{category.label}</span>
                    </div>
                )
                )}
            </div>
            {selectedCategory && props.progressData && props.progressData[selectedCategory] && (
                <div className="progress_bars">
                    <h3>{selectedCategory}</h3>

                    {/* RENDER BY ITERATING */}
                    {props.progressData[selectedCategory].map((progress, index) => (
                        <ProgressBar
                            key={index}
                            label={progress.label}
                            percentage={progress.percentage}
                        />
                    ))}
                </div>
            )}

            {(filteredItems.length > 0) && (
                <div className="items">
                    <h1>BRUH</h1>

                    {filteredItems.map((item, i) => (
                        <div key={item.category} className="item">
                            {item.imgs.map((img, ii) => (
                                <div className="image" key={ii}>
                                    <img src={img} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

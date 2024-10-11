import './About.css'
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import GreenButton from '../GreenButton/GreenButton.jsx';

function About() {
    const [selectedCategory, setSelectedCategory] = useState('experience');
    const [hoveredCategory, setHoveredCategory] = useState('experience');


    const handleClick = (category) => {
        console.log("Selected category:", category);
        setSelectedCategory(category);
    };

    const handleHover = (category) => {
        setHoveredCategory(category);
    }

    const categories = [
        { name: 'experience', icon: 'fas fa-paper-plane', label: 'Experience' },
        { name: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
        { name: 'award', icon: 'fas fa-trophy', label: 'Award' },
        { name: 'skills', icon: 'fas fa-gem', label: 'Skills' },
    ];

    const progressData = {
        experience: [
            { label: 'Job 1', percentage: 70 },
            { label: 'Job 2', percentage: 50 },
            { label: 'Job 3', percentage: 30 },
            { label: 'Job 4', percentage: 90 },
        ],
        education: [
            { label: 'Degree 1', percentage: 100 },
            { label: 'Degree 2', percentage: 80 },
            { label: 'Degree 3', percentage: 60 },
            { label: 'Degree 4', percentage: 40 },
        ],
        award: [
            { label: 'Award 1', percentage: 90 },
            { label: 'Award 2', percentage: 70 },
            { label: 'Award 3', percentage: 60 },
            { label: 'Award 4', percentage: 80 },
        ],
        skills: [
            { label: 'Skill 1', percentage: 85 },
            { label: 'Skill 2', percentage: 75 },
            { label: 'Skill 3', percentage: 95 },
            { label: 'Skill 4', percentage: 55 },
        ],
    };

    return (
        <div className="about_main padded">
            <SectionHeading h2="About" span="Me" color="#203D3F" />

            <div className="about_body">
                <div className="left">
                    <img src="https://via.placeholder.com/350" alt="Placeholder Image" />
                </div>
                <div className="right">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ullam id consequuntur saepe delectusipsum reiciendis nihil maiores, obcaecati<br /> <br /> ab natus illum tempore quisquam quibusdam
                        Lorem ipsum dolor sit amet consectetur adipisicing <br /> <br />elit. Repellendus pariatur, dolores odit aspernatur quas mollitia perferendis iste qui distinctio dignissimos ut quasi deserunt quod ipsa! <br /> <br />    Laboriosam natus iusto voluptatibus beatae?</p>
                    <GreenButton content="Download Resume" />

                    <button >Hire me</button>
                </div>
            </div>
            <div className="about_footer">
                <div className='categories'>
                {categories.map((category) => (
                    <div    key={category.name}
                            className={`category ${hoveredCategory === category.name && selectedCategory === category.name ? 'active' : ''}`}
                            onClick={()=>handleClick(category.name)}
                            onMouseOver={()=>handleHover(category.name)}>

                            <span><i className={category.icon}></i>{category.label}</span>
                    </div>
                )
                )}
                </div>

                {selectedCategory && (
                    <div className="progress_bars">
                        <h3>{selectedCategory}</h3>

                        {/* RENDER BY ITERATING */}
                        {progressData[selectedCategory].map((progress, index) => (
                            <ProgressBar
                                key={index}
                                label={progress.label}
                                percentage={progress.percentage}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
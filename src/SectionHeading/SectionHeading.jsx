import React from 'react'
import './SectionHeading.css'

export default function SectionHeading({h2,color,span,para=true}) {
    let paragraph=null;
    if (para) {
        paragraph = <p style={{ color: color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aspernatur, ipsam quis consequatur minus </p>;
    }

    return (
        <div className="section_heading">
            <h2>{h2} <span className="highlight_span">{span}</span></h2>
            <div className="hr">
                <hr />
                <div className="bulge"></div>
            </div>
            {paragraph}
        </div>
    )
}


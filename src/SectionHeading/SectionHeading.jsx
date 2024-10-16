import React from 'react'
import './SectionHeading.css'

export default function SectionHeading(props) {
    let para=null;
    if (props.para) {
        para = <p style={{ color: props.color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aspernatur, ipsam quis consequatur minus </p>;
    }

    return (
        <div className="section_heading">
            <h2>{props.h2} <span className="highlight_span">{props.span}</span></h2>
            <div className="hr">
                <hr />
                <div className="bulge"></div>
            </div>

            {/* <p style={{ color: props.color }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aspernatur, ipsam quis consequatur minus </p> */}
            {para}
        </div>
    )
}

SectionHeading.defaultProps={
    para: true
}

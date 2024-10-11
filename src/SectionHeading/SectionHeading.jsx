import React from 'react'
import './SectionHeading.css'

export default function SectionHeading(props) {
  return (
      <div className="section_heading">
          <h2>{props.h2} <span className="highlight_span">{props.span}</span></h2>
          <div className="hr">
              <hr />
              <div className="bulge"></div>
          </div>
          <p style={{color:props.color}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aspernatur, ipsam quis consequatur minus repellat reiciendis </p>
      </div>
  )

  props
}

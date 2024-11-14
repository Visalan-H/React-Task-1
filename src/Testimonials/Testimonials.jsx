import './Testimonials.css'
import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

function Testimonials() {
  return (
    <div className='testimonials_main padded'>
        <SectionHeading span="Client Say!" h2="What"/>

        <div className='testimonials'>
            <div className="testimonial">
                <div className="image"></div>
                <div className="content">
                    <div className="icons"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas commodi omnis minima sapiente reprehenderit error </p>
                    <h2>BRUCE WAYNE</h2>
                    <h5>CEO, wayne industries</h5>
                </div>
            </div>
              <div className="testimonial">
                  <div className="image"></div>
                  <div className="content">
                      <div className="icons"></div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas commodi omnis minima sapiente reprehenderit error </p>
                      <h2>BRUCE WAYNE</h2>
                      <h5>CEO, wayne industries</h5>
                  </div>
              </div>
              <div className="testimonial">
                  <div className="image"></div>
                  <div className="content">
                      <div className="icons"></div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas commodi omnis minima sapiente reprehenderit error </p>
                      <h2>BRUCE WAYNE</h2>
                      <h5>CEO, wayne industries</h5>
                  </div>
              </div>
              <div className="testimonial">
                  <div className="image"></div>
                  <div className="content">
                      <div className="icons"></div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas commodi omnis minima sapiente reprehenderit error </p>
                      <h2>BRUCE WAYNE</h2>
                      <h5>CEO, wayne industries</h5>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Testimonials

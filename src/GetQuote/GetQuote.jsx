import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './GetQuote.css'
import TransparentButton from '../TransparentButton/TransparentButton'

function GetQuote() {
  return (
    <div className='getquote_main padded'>
        <SectionHeading h2="Let's Work" span="Together" para={false}/>
        <div className="getquote_body">
          <h2>I am available for freelance</h2>
          <TransparentButton content="Get Quote"/>
        </div>
    </div>
  )
}

export default GetQuote

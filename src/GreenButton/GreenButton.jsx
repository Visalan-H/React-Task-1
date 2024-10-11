import React from 'react'
import './GreenButton.css'

function GreenButton(props) {
  return (
    <button className='green_button'>{props.content}</button>
  )
}

export default GreenButton;

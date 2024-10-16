import React from 'react'
import './TransparentButton.css'

function TransparentButton(props) {
    return (
        <button className='transparent_button' style={{ color: props.color, border: `2px solid ${props.color}`}}>{props.content}</button>
    )
}

export default TransparentButton;
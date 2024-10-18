import React from 'react'
import './ServicesCard.css'
import GreenButton from '../GreenButton/GreenButton'

export default function ServicesCard(props) {
    return (
        <div className="card" key={props.i}>
            <div className="image">
                <i className={props.card.icon}></i>
            </div>
            <div className="content">
                <h3>Lorem ipsum</h3>
                <p>{props.card.content}</p>
                <GreenButton content="Read More" />
            </div>
        </div>
    )
}

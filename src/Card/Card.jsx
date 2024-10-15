    import React,{useState} from 'react'
    import GreenButton from '../GreenButton/GreenButton'
    import './Card.css'

    function Card(props) {

        // const [selectedCard,setSelectedCard]=useState('Standard');

        // const handleHover = (title) => {
        //     setSelectedCard(title);
        // };
        
        return (
            <div className="pricing_card">
                <div className={`h2title ${props.title==="Standard"?"active":""}`}>
                    <h2>{props.title}</h2>
                </div>
                <div className="circle">
                    <p>$ <span className='price_span' >{props.price}</span></p>
                    <p>/month*</p>
                </div>
                <div className="card_body">
                    <p>{props.num}GB Storage</p>
                    <p>{props.num} Emails</p>
                    <p>{props.num} Domains</p>
                    <p>Unlimited Bandwidth</p>
                    <GreenButton content="Choose Plan"/>
                </div>
            </div>
        )
    }

    export default Card

import React from 'react'
import './Pricing.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'

function Pricing() {
    return (
        <div className='pricing_main padded'>
            <SectionHeading h2="Pricing" span="Plan" />

            <div className="pricing_body">
                <Card title="Starter" num={10} price={19}/>
                <Card title="Standard" num={15} price={29} />
                <Card title="Premium" num={20} price={39} />
            </div>
        </div>
    )
}

export default Pricing

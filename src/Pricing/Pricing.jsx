import React from 'react'
import './Pricing.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import GreenButton from '../GreenButton/GreenButton'

function Pricing() {
    return (
        <div className='pricing_main padded'>
            <SectionHeading h2="Pricing" span="Plan" />

            <div className="pricingbody">
                <div className="card">
                    <div className="title">
                        <h2>Starter</h2>
                    </div>
                    <div></div>
                    <pre>10GB Storage</pre>
                    <pre>10 Emails</pre>
                    <pre>10 Domains</pre>
                    <pre>Unlimited Bandwidth</pre>
                    <GreenButton content="Choose Plan" />
                </div>
                <div className="card">
                    <div className="title">
                        <h2>Standard</h2>
                    </div>
                    <div></div>
                    <pre>15GB Storage</pre>
                    <pre>15 Emails</pre>
                    <pre>15 Domains</pre>
                    <pre>Unlimited Bandwidth</pre>
                    <GreenButton content="Choose Plan" />
                </div>
                <div className="card">
                    <div className="title">
                        <h2>Premium</h2>
                    </div>
                    <div></div>
                    <pre>20GB Storage</pre>
                    <pre>20 Emails</pre>
                    <pre>20 Domains</pre>
                    <pre>Unlimited Bandwidth</pre>
                    <GreenButton content="Choose Plan" />
                </div>
            </div>
        </div>
    )
}

export default Pricing

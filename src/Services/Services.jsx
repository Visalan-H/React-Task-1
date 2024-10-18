import './Services.css';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
// import GreenButton from '../GreenButton/GreenButton.jsx';
import ServicesCard from '../ServicesCard/ServicesCard.jsx';

function Services() {

    const cards = [
        { icon: 'fas fa-cog fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-paint-brush fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-bolt fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-desktop fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-camera fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-umbrella fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam iure cum nostrum quibusdam eum totamiure cum nostrum quibusdam eum totam' },

    ];

    return (
        <div className="services_main padded" id='services'>
            <SectionHeading h2="Our" span="Services" color="white"/>

            <div className="section_body">
                {cards.map((card,i)=>(
                    <ServicesCard card={card} i={i}/>
                ))}
            </div>
        </div>
    );
}

export default Services;

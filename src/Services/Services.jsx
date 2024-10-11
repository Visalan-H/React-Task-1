import './Services.css';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import GreenButton from '../GreenButton/GreenButton.jsx';

function Services() {

    const cards = [
        { icon: 'fas fa-cog fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-paint-brush fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-bolt fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-desktop fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-camera fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },
        { icon: 'fas fa-umbrella fa-2x', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi autem harum cumque illum iure cum nostrum quibusdam eum totam' },

    ];

    return (
        <div className="services_main padded">
            <SectionHeading h2="Our" span="Services" color="white"/>

            <div className="section_body">

                {cards.map((card,i)=>(
                     (<div className="card" key={i}>
                        <div className="image">
                            <i className={card.icon}></i>
                        </div>
                        <div className="content">
                            <h3>Lorem ipsum</h3>
                            <p>{card.content}</p>
                            <GreenButton content="Read More" />
                        </div>
                    </div>)
                ))}
            </div>
        </div>
    );
}

export default Services;

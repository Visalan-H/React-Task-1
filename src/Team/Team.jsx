  import React from 'react'
  import SectionHeading from '../SectionHeading/SectionHeading'
  import './Team.css'

  export default function Team() {

    const members=[
      {name:"Batman",position:"Founder and Director",image:"https://via.placeholder.com/220"},
      { name: "Cat", position: "Co-Founder", image: "https://via.placeholder.com/220" },
      { name: "Ironman", position: "Asst. Director", image: "https://via.placeholder.com/220" },
      { name: "Spiderman", position: "Asst. Director", image: "https://via.placeholder.com/220" }
    ]
    return (
      <div className='team_main padded'>
            <SectionHeading h2="My" span="Team"/>
            <div className="team">
              {members.map((member)=>
                <div className="member">
                  <div className="image">
                    <img src={member.image} />
                    <div className="social">
                      <div className="icon"><i className='fa fa-facebook -f'></i></div>
                      <div className="icon"><i className='fa fa-instagram'></i></div>
                      <div className="icon"><i className='fa fa-linkedin'></i></div>
                      <div className="icon"><i className='fa fa-twitter'></i></div>
                    </div>
                  </div>
                  <div className="details">
                    <h3>{member.name}</h3>
                    <h5>{member.position}</h5>
                  </div>
                </div>
            )}
            </div>
      </div>
    )
  }
  import React from 'react'
  import SectionHeading from '../SectionHeading/SectionHeading'
  import './Team.css'

  export default function Team() {

    const members=[
      {name:"Batman",position:"Founder and Director",image:"https://via.placeholder.com/250"},
      { name: "Cat", position: "Co-Founder", image: "https://via.placeholder.com/250" },
      { name: "Ironman", position: "Asst. Director", image: "https://via.placeholder.com/250" },
      { name: "Spiderman", position: "Asst. Director", image: "https://via.placeholder.com/250" }
    ]
    return (
      <div className='team_main padded'>
            <SectionHeading h2="My" span="Team"/>
            <div className="team">
              {members.map((member,i)=>
                <div className="member" key={i}>
                  <div className="image">
                    <img src={member.image} />
                    <div className="social">
                      <div className="icon"><i className="fab fa-facebook"></i></div>
                      <div className="icon"><i className="fab fa-instagram"></i></div>
                      <div className="icon"><i className="fab fa-linkedin"></i></div>
                      <div className="icon"><i className="fab fa-twitter"></i></div>
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
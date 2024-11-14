  import React from 'react'
  import SectionHeading from '../SectionHeading/SectionHeading'
  import './Team.css'

  export default function Team() {

    const members=[
      {name:"Batman",position:"Founder and Director",image:"src/assets/cat1.jpg"},
      { name: "Cat", position: "Co-Founder", image: "src/assets/cat2.jpg" },
      { name: "Ironman", position: "Asst. Director", image: "src/assets/cat3.jpg" },
      { name: "Spiderman", position: "Asst. Director", image: "src/assets/cat4.jpg" }
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
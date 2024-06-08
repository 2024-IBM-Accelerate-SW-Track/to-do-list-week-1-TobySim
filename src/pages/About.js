import React, { Component } from 'react';
import "src/pages/About.css";
import profilePic from "src/assets/ProfilePic.JPEG";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {profilePic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Toby Simon</div>
            <div className="brief_description">
              Hi! I am Toby Simon, an upcoming junior at the University of Illinois at Chicago. I enjoy learning as much as I can from others so I can improve my skills. in my free time, I love playing sports, playing cards, and spending time with my family and friends. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

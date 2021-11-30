import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Octocat from "../../assets/Images/Octocat.png";
import Icons from "../../assets/Images/icons8-internet-50.png";
import Foodie from "../../assets/Images/Foodie.png"
import MTG from "../../assets/Images/MTG.png"
import Password from "../../assets/Images/Password.png"

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src={Octocat} alt="GitHub" /></a> 
              <a href={props.link}><img class="project-icon" src={Icons} alt="Live Link" /></a> 
       
             
             </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;

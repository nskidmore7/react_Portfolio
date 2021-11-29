import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
              <a href={props.github}><img class="project-icon" src="/assets/Images/Octocat.png" alt="GitHub" /></a> 
              <a href={props.link}><img class="project-icon" src="/assets/Images/icons8-internet-50.png" alt="Live Link" /></a> 
       
             
             </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;

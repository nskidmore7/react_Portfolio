import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodie from "../../assets/Images/Foodie.png"
import MTG from "../../assets/Images/MTG.png"
import Password from "../../assets/Images/Password.png"

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Portfolio</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.link}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;

import React from 'react';
import Github from "../../assets/Images/Github.png"
import LinkedIn from "../../assets/Images/linkedin.png"

function Footer() {

  return (
    <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/nskidmore7"><img src={Github} alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/nathan-skidmore-7458056a/"><img src={LinkedIn} alt="LinkedIn" className="icon"/></a>
        
    </footer>
    )}

export default Footer;

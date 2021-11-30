import React from "react";
import LinkedIn from "../../assets/Images/linkedin.png";
import NateResume from "../../assets/NateSkidmoreResume.pdf"

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/nathan-skidmore-7458056a/">
              <img
                src={LinkedIn}
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href={NateResume}
            class="link"
          >
            Download Resume
          </a>
      </div>
      </section>
  )}

export default Resume;

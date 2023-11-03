import React from "react";
import profileImage from "../../assets/large/Profile/Alex Kelm (2).jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <h1 id="about" className="section-title primary-border">
        About Me
      </h1>
      <div className="flex-row intro-info">
        <div className="intro-img">
          <img src={profileImage} style={{ width: "100%" }} alt="profile" />
        </div>
        <p>
          Howdy! I'm Alex, a 30-year-old residing in a small town in Michigan. I hold an Associate in Applied Science which specializes in Histology, the study of tissues from Mott Community College in Flint, Michigan. I served four years in the United States Marine Corps as an automotive maintenance technician and was honorably discharged at the end of my contract as a Sergeant. I had originally gone to college to pursue a degree in mechanical engineering but life took an unexpected turn with Covid and led me to a path in the medical field. I enjoy reading, art and creating in general.
        </p>
      </div>
    </section>
  );
}

export default About;

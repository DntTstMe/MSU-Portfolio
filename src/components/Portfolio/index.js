import React from "react";
import courseImage from "../../assets/small/Course.png";
import tastefulImage from "../../assets/small/Tasteful.png";
import weatherImage from "../../assets/small/Weather.png";
import testImage from "../../assets/small/Test.png";
import passwordImage from "../../assets/small/Password.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dnttstme.github.io/Trippin-Over-Passwords/">
                {" "}
                <img
                  src={passwordImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
               An application that generates a password with various criteria that can be selected by the user. Solves the problem of creating a generic password by randomly generating a password.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dnttstme.github.io/Testing-The-Quiz/">
                {" "}
                <img
                  src={testImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Test-Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Testing-The-Quiz</h4>
              <p>
               A timed coding quiz for programmers wanting to test their knowledge. You can exercise your knowledge against the clock. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dnttstme.github.io/Weathering-The-Storm/">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://safe-reaches-31058-7bbe0470a182.herokuapp.com/login">
                {" "}
                <img
                  src={courseImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Course_Tracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Course Tracker</h4>
              <p>
              This application is designed to help college students keep track of their progress through each semester. When you enter the application, the login page will ask you for your email and password. Once you login, the dashboard appears where you can see your progression, any reminders, as well as your notes. {" "}
              </p>
            </div>
          </div>
        </div>


        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://seanye333.github.io/Tasteful-Twosomes/">
                {" "}
                <img
                  src={tastefulImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tasteful-Twosomes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tasteful Twosomes</h4>
              <p>
              This application is designed to randomly generate a meal recipe and drink recipe pairing. Once the "create a random food pairing" button is clicked, the application generates a random meal and cocktail recipe. The recipe and instructions are populated below the image of each meal and cocktail. Select the "save to favorites" button to keep each of your favorite pairings saved.{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
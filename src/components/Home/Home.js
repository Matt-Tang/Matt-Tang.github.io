import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/profile.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1> */}

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MATTHEW TANG </strong> <span className="wave">👋🏻</span>
                <br></br>
                <h2>Computer Engineering <span class="school-name">@UWaterloo</span></h2>
                <h3>ECE Academic Class Rep</h3>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* <Type /> */}
                <h3>I'm a <a href="https://www.youtube.com/channel/UC6TgSJusmxna6L3-uqvCG-A" target="_blank">vlogger!</a></h3>
                <h3>I'm a <a href="https://devpost.com/software/flow-ai" target="_blank">Hack the North Winner!</a></h3>
                <h3>I'm a <a href="https://medium.com/matthew-tang" target="_blank">Lifestyle and Motivational Blogger!</a></h3>
                <h3>I'm a <a href="http://matthew-tang-ece-course-critique.s3-website.us-east-2.amazonaws.com/" target="_blank">Course Critiquer @UWaterloo</a></h3>
                <h3>Mentor <a href="http://www.techplusuw.org/" target="_blank">@Tech+UW</a> and <a href="https://ecesociety.uwaterloo.ca/" target="_blank">@ECESociety</a></h3>
                <br></br>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="mailto:ml3tang@uwaterloo.ca"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://github.com/Matt-Tang"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/matthewlytang/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/mlytang/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://medium.com/matthew-tang"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <i className="fab fa-medium-m"></i>
                    </a>
                  </li>

                  <li className="social-icons">
                    <a
                      href="https://www.youtube.com/channel/UC6TgSJusmxna6L3-uqvCG-A"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>

                <h3>Feel free to <span className="purple">connect </span>with me</h3>
              </div> 
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> 
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;

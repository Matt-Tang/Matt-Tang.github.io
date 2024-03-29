import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import covid19 from "../../Assets/Projects/covid19.png";
import noverty from "../../Assets/Projects/noverty.png";
import newyork from "../../Assets/Projects/newyork.png";
import fydp from "../../Assets/Projects/fydp.png";
import dressme from "../../Assets/Projects/dress-me.png";


function Archive() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Documents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've finished recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noverty}
              isBlog={false}
              title="Software Requirements"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://matt-tang.github.io/documents/SRS.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="COVID-19"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://matt-tang.github.io/documents/covid19.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newyork}
              isBlog={false}
              title="Tappan Zee Bridge"
              // description="Using 'Natural Launguage Processing' for detection of posts in social media platform to identity if a person is affected by any mental illness and thus helping in sucide prevention."
              link="https://matt-tang.github.io/documents/New-York-Tappan-Zee-Bridge.pdf"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fydp}
              isBlog={false}
              title="Capstone Project"
              link="https://matt-tang.github.io/documents/FYDP.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dressme}
              isBlog={false}
              title="Dress Me Mobile App"
              link="https://matt-tang.github.io/documents/Dress-Me.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Archive;

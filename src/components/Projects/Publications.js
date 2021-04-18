import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import covid19 from "../../Assets/Projects/covid19.png";
import noverty from "../../Assets/Projects/noverty.png";


function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noverty}
              isBlog={false}
              title="Software Requirements"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="/publications/SRS.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="COVID-19"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="/publications/covid19.pdf"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog1}
              isBlog={false}
              title="Suicide Ideation Prediction"
              description="Using 'Natural Launguage Processing' for detection of posts in social media platform to identity if a person is affected by any mental illness and thus helping in sucide prevention."
              link="https://gist.github.com/soumyajit4419/ef44d41fdc510637c7f6730d1bbce2ed"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;

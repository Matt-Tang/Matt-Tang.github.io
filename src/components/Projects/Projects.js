import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import blog1 from "../../Assets/Projects/blog_1_cropped.png";
import blog2 from "../../Assets/Projects/blog_2_cropped.png";
import blog3 from "../../Assets/Projects/blog_3_cropped.png";
import blog4 from "../../Assets/Projects/blog_4_cropped.png";
import blog5 from "../../Assets/Projects/blog_5_cropped.png";
import blog6 from "../../Assets/Projects/blog_6_cropped.png";
import blog7 from "../../Assets/Projects/blog_7_cropped.png";
import blog8 from "../../Assets/Projects/blog_8_cropped.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf Disease Prediction"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicide Ideation Prediction"
              description="Using 'Natural Launguage Processing' for detection of posts in social media platform to identity if a person is affected by any mental illness and thus helping in sucide prevention."
              link="https://gist.github.com/soumyajit4419/ef44d41fdc510637c7f6730d1bbce2ed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Emotion Predcition from EEG Signals"
              description="Using EEG signals from 'AMIGOS' Dataset to extract features and train a classifier that helps in detection of human emotions from Brain Signals."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medhub}
              isBlog={false}
              title="Making Healthcare Easy and Hassle Free"
              description="Extract, store and retrieve medical information from Medical Reports using OCR.
              Display the information online Graphically for the use of Patients as well as Doctors only with Authorised Access.
              Giving an complete health Analytics to doctors of Patients as well as Doctors preseving user privacy."
              link="https://github.com/soumyajit4419/MedHub_360"
            />
          </Col>
        </Row> */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog8}
              link="https://medium.com/matthew-tang/im-too-comfortable-for-my-own-good-84bc290ed4a5"
              title="I’m Too Comfortable for my Own Good"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog7}
              link="https://medium.com/matthew-tang/2020-reflections-90ce7684aab6"
              title="2020 Reflections"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog6}
              link="https://medium.com/matthew-tang/midnight-blues-e7806898b74"
              title="Midnight Blues"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog5}
              link="https://medium.com/matthew-tang/my-friends-are-my-role-models-765310c54c25"
              title="My Friends Are My Role Models"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog4}
              link="https://medium.com/matthew-tang/why-its-time-to-stop-labeling-those-around-us-15c9475c22c7"
              title="Why It’s Time To Stop Labeling Those Around Us"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog3}
              link="https://medium.com/matthew-tang/its-the-little-things-that-matter-the-most-1f9f6b45cb2c"
              title="It’s the Little Things That Matter the Most"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog2}
              link="https://medium.com/matthew-tang/why-is-it-so-easy-to-be-a-sad-boi-60d73c5b44d3"
              title="Why is it so easy to be a sad boi?"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blog1}
              link="https://medium.com/matthew-tang/grind-dont-stop-mentality-7734b766b2b6"
              title="Grind Don’t Stop Mentality"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

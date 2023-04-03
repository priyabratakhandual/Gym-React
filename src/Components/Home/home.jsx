import React from "react";
import Button from "react-bootstrap/Button";


import "./home.css";

const Home = () => {
  return (
    <div>
      <body>
        <div>
          <div className="container">
            <h2 > Muscle Fitness</h2>
            <p1 className="para">
              {" "}
              At our gym, we believe in empowering individuals To reach their
              full potential and lead a healthy lifestyle. We offer a range of
              equipment, classes, and personal training, To help you achieve
              your fitness goals and feel your best. Our dedicated team of
              trainers and instructors Are here to support and motivate you
              every step of the way. Join us and discover the transformative
              power of fitness, In a welcoming and inclusive community.
            </p1>
            <div>
              <Button variant="outline-info"href="#contact" >contact Us</Button>
            </div>
          </div>
          {/* <Card className="container1">
            <Card.Body>
              <Card.Title>Muscle Fitnes</Card.Title>
              <Card.Text>
                At our gym, we believe in empowering individuals To reach their
                full potential and lead a healthy lifestyle. We offer a range of
                equipment, classes, and personal training, To help you achieve
                your fitness goals and feel your best. Our dedicated team of
                trainers and instructors Are here to support and motivate you
                every step of the way. Join us and discover the transformative
                power of fitness, In a welcoming and inclusive community.
              </Card.Text>
              <Button variant="outline-info">contact Us</Button>
            </Card.Body>
          </Card> */}
        </div>
      </body>
    </div>
  );
};

export default Home;

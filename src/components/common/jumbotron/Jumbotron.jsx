import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { Styles, Overlay } from "./Jumbotron-styles.jsx";

export const Jumbotron = () => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <Overlay />
        <Container>
          <h4>Welcome to a React, Bootstrap & Styled Components Website</h4>
          <p>Learn by doing</p>
        </Container>
      </Jumbo>
    </Styles>
  );
};

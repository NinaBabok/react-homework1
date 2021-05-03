import React from "react";
import Button from "../Button/Button";
// import { Button } from "../../lib/style/generalStyles";
import { Description, EventWrapper, Figure, Image, Title } from "./EventStyle";

const Event = (props) => {

  return (
    <EventWrapper>
      <Figure>
        <Image src={props.image} alt={props.imageAlt} />
      </Figure>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button to={props.route}>{props.buttonText}</Button>
    </EventWrapper>
  );
};

export default Event;

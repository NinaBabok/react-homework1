import React from "react";
import Button from "../Button/Button";
import "./Event.scss";

const Event = ({ image, title, description }) => {
  return (
    <div className="events__event">
      <figure className="events__event-figure">
        <img className="events__event-image" src={image} alt="Design" />
      </figure>
      <h3 className="events__event-title">{title}</h3>
      <p className="events__event-description">{description}</p>
      <Button to={"/event/" + encodeURIComponent(title)}>Find out more</Button>
    </div>
  );
};

export default Event;

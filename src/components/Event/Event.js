import React from "react";
import Button from "../Button/Button";
import "./Event.scss";

const Event = ({ image, title, description }) => {
  return (
    <div className="Event">
      <figure className="Event-Figure">
        <img className="Event-Image" src={image} alt="Design" />
      </figure>
      <h3 className="Event-Title">{title}</h3>
      <p className="Event-Description">{description}</p>
      <Button to={"/event/" + encodeURIComponent(title)}>Find out more</Button>
    </div>
  );
};

export default Event;

import React from "react";
import Button from "../Button/Button";
import "./EventCard.scss";

const EventCard = ({ title, location, date, freeSeats, company }) => {
  return (
    <div className="EventCard">
      <h2 className="EventCard-Title">{title}</h2>
      <div className="EventCard-Content">
        <div className="EventCard-ContentRow">
          <EventCardItem title="Lokacija" value={location} />
          <EventCardItem title="Datum i vrijeme" value={date} />
        </div>
        <div className="EventCard-ContentRow">
          <EventCardItem title="Slobodna mjesta" value={freeSeats} />
          <EventCardItem title="Firma" value={company} />
        </div>
      </div>
      <Button to={"/event/" + encodeURIComponent(title)}>Find out more</Button>
    </div>
  );
};

const EventCardItem = ({ title, value }) => {
  return (
    <div className="EventCardItem">
      <h3 className="EventCardItem-Title">{title}</h3>
      <p className="EventCardItem-Value">{value}</p>
    </div>
  );
};

export default EventCard;

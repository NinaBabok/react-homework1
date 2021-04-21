import React from "react";
import Button from "../Button/Button";
import "./EventCard.scss";

const EventCard = ({ title, location, date, freeSeats, company }) => {
  return (
    <div className="event-card">
      <h2 className="event-card__title">{title}</h2>
      <div className="event-card__content">
        <div className="event-card__content-row">
          <EventCardItem title="Lokacija" value={location} />
          <EventCardItem title="Datum i vrijeme" value={date} />
        </div>
        <div className="event-card__content-row">
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
    <div className="event-card__item">
      <h3 className="event-card__item-title">{title}</h3>
      <p className="event-card__item-value">{value}</p>
    </div>
  );
};

export default EventCard;

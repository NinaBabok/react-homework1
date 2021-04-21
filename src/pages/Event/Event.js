import React from "react";
import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import "./Event.scss";

import image from "../../assets/design.jpg";

const Event = () => {
  let { titleEvent } = useParams();

  const title = decodeURIComponent(titleEvent);

  const description = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
    praesentium fugit? Doloremque id culpa est ipsum. Explicabo eveniet ducimus temporibus quas 
    expedita, tenetur reiciendis nam laborum animi eum! Rem, accusamus. Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. Totam sapiente voluptatibus impedit consequuntur cum ex sequi odio
    numquam sit soluta, harum natus magni cupiditate quidem similique expedita doloremque eum
    voluptatem!`;
  const location = "Hodnik FOI-ja";
  const date = "Hodnik FOI-ja";
  const company = "Hodnik FOI-ja";
  const freeSeats = "Hodnik FOI-ja";

  return (
    <Section title={title} className="section-event">
      <div className="event-info ">
        <figure className="event-info__figure">
          <img src={image} alt="UX/UI workshop" className="event-info__image" />
        </figure>
        <div className="event-info__content">
          <div className="event-info__content-row">
            <EventInfoItem title="Lokacija" value={location} />
            <EventInfoItem title="Datum i vrijeme" value={date} />
          </div>
          <div className="event-info__content-row">
            <EventInfoItem title="Slobodna mjesta" value={freeSeats} />
            <EventInfoItem title="Firma" value={company} />
          </div>
          <Button>Prijavi se</Button>
        </div>
      </div>
      <p className="event-info__description">{description}</p>
    </Section>
  );
};

const EventInfoItem = ({ title, value }) => {
  return (
    <div className="event-info__item">
      <h3 className="event-info__item-title">{title}</h3>
      <p className="event-info__item-value">{value}</p>
    </div>
  );
};

export default Event;

import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import Section from "../../components/Section/Section";
import "./Events.scss";

const Events = () => {
  return (
    <main>
      <Section title="Events" className="section__events">
        <EventCard
          title="UX/UI workshop"
          location="Hodnik FOI-ja"
          date="05.10.2021."
          freeSeats="25"
          company="Five"
        />
        <EventCard
          title="Frontend best practices"
          location="Hodnik FOI-ja"
          date="06.10.2021."
          freeSeats="25"
          company="Speck"
        />
        <EventCard
          title="Digital marketing workshop"
          location="Dvorana D1"
          date="6.10.2021."
          freeSeats="25"
          company="Infinum"
        />
        <EventCard
          title="UX/UI workshop"
          location="Hodnik FOI-ja"
          date="05.10.2021."
          freeSeats="25"
          company="Five"
        />
        <EventCard
          title="UX/UI workshop"
          location="Hodnik FOI-ja"
          date="05.10.2021."
          freeSeats="25"
          company="Five"
        />
      </Section>
    </main>
  );
};

export default Events;

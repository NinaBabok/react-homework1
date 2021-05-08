import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Section from "../../components/Section/Section";
import { Grid, Title } from "../../lib/style/generalStyles";

import eventsMock from "../../lib/mock/events";
import { Spinner } from "../../components/Spinner/Spinner";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Events = () => {

  console.log('events')
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, []);

  useEffect(() => {
    setFilteredEvents(events);
  }, [events])

  const handleSearch = (e) => {
    const input = e.target.value;
    setFilteredEvents(events.filter(e => e.title.toLowerCase().includes(input.toLowerCase())))
  };

  return (
    <>
      <Title>Events</Title>
      <Section withoutTopPadding="true">
        <SearchBar placeholder="Write here" onValueChange={handleSearch} />
        {filteredEvents && (
          <Grid>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                route={`/event/${event.id}`}
                title={event.title}
                location={event.location}
                dateTime={event.dateTime}
                availability={event.availability}
                company={event.company}
                buttonText="find out more"
              />
            ))}
          </Grid>
        )}
        {!filteredEvents && <Spinner />}
      </Section>
    </>
  );
};

export default Events;
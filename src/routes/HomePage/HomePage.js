import React, { useEffect, useState } from "react";

// components
import Event from "../../components/Event/Event";
import Hero from "../../components/Hero/Hero";
import { Grid } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import eventsMock from "../../lib/mock/events";
import { Spinner } from "../../components/Spinner/Spinner";

const Home = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, []);

  return (
    <>
      <Hero />
      <Section title="Featured events">
        {events && (
          <Grid columns={events.filter(e => e.isFeatured === true).length}>
            {events.map(
              (event) =>
                event.isFeatured && (
                  <Event
                    key={event.id}
                    route={`/event/${event.id}`}
                    image={event.imageUrl}
                    imageAlt={event.imageAlt}
                    title={event.title}
                    description={event.shortDescription}
                    buttonText="Find out more"
                  />
                )
            )}
          </Grid>
        )}
        {!events && <Spinner />}
      </Section>
    </>
  );
};

export default Home;

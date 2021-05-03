import React, { useEffect, useState } from "react";
import { Title } from "../../lib/style/generalStyles";
import {
  Content,
  ContentRow,
  Description,
  EventInfoItemWrapper,
  Figure,
  Image,
  EventInfoItemValue,
  EventInfoItemTitle,
  Top,
  SectionEvent,
} from "./EventPageStyle";
import Section from "../../components/Section/Section";
import eventsMock from "../../lib/mock/events";
import Button from "../../components/Button/Button";

const Event = (props) => {
  const routerEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter((event) => event.id === routerEventId));
  }, [events, routerEventId]);

  return (
    <>
      {event && (
        <>
          <Title>{event && event.title}</Title>
          <Section withoutTopPadding={true}>
            <SectionEvent>
              <Top>
                <Figure>
                  <Image src={event.imageUrl} alt={event.imageAlt} />
                </Figure>
                <Content>
                  <EventInfo
                    location={event.location}
                    dateTime={event.dateTime}
                    availability={event.availability}
                    company={event.company}
                    hasButton={true}
                    route="/event"
                    buttonText="Prijavi se"
                  />
                </Content>
              </Top>
              <Description>{event.description}</Description>
            </SectionEvent>
          </Section>
        </>
      )}
    </>
  );
};

const EventInfo = (props) => {
  return (
    <>
      <ContentRow>
        <EventInfoItem title="Lokacija" value={props.location} />
        <EventInfoItem title="Datum i vrijeme" value={props.dateTime} />
      </ContentRow>
      <ContentRow>
        <EventInfoItem title="Slobodna mjesta" value={props.availability} />
        <EventInfoItem title="Firma" value={props.company} />
      </ContentRow>
      {props.hasButton && <Button to="">{props.buttonText}e</Button>}
    </>
  );
};

const EventInfoItem = ({ title, value }) => {
  return (
    <EventInfoItemWrapper className="EventInfoItem">
      <EventInfoItemTitle>{title}</EventInfoItemTitle>
      <EventInfoItemValue className="EventInfoItem-Value">
        {value}
      </EventInfoItemValue>
    </EventInfoItemWrapper>
  );
};

export default Event;

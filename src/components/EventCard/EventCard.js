import React from "react";
import Button from "../Button/Button";
import { Content, ContentRow, EventCardItemTitle, EventCardItemValue, EventCardItemWrapper, EventCardWrapper, Title } from "./EventCardStyle";

const EventCard = (props) => {
  return (
    <EventCardWrapper>
      <Title>{props.title}</Title>
      <Content>
        <ContentRow>
          <EventCardItem title="Lokacija" value={props.location} />
          <EventCardItem title="Datum i vrijeme" value={props.dateTime} />
        </ContentRow>
        <ContentRow>
          <EventCardItem title="Slobodna mjesta" value={props.availability} />
          <EventCardItem title="Firma" value={props.company} />
        </ContentRow>
      </Content>
      <Button to={props.route}>{props.buttonText}</Button>
    </EventCardWrapper>
  );
};

const EventCardItem = ({ title, value }) => {
  return (
    <EventCardItemWrapper>
      <EventCardItemTitle>{title}</EventCardItemTitle>
      <EventCardItemValue>{value}</EventCardItemValue>
    </EventCardItemWrapper>
  );
};

export default EventCard;

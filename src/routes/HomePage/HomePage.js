import React from "react";
import "./Home.scss";

// images
import marketing from "../../assets/marketing.jpg";
import development from "../../assets/development.jpg";
import design from "../../assets/design.jpg";

// components
import Event from "../../components/Event/Event";
import Section from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";


const Home = () => {
  return (
    <>
      <Hero />
      <Section title="Featured events">
        <Event
          image={design}
          title="UX/UI design workshop"
          description="Learn how to solve big problems and test new ideas based on Google
        Sprint methodology..."
        />
        <Event
          image={development}
          title="Frontend best practices"
          description="Best frontend practices for developers. Learn advanced CSS
            techniques and much more..."
        />
        <Event
          image={marketing}
          title="Digital marketing workshop"
          description="Learn how to use Google Ads and social networks to gain customers
            for your digital product..."
        />
      </Section>
    </>
  );
};

export default Home;

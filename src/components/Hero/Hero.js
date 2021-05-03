import React from 'react';
import { Content, Heading, HeroWrapper, Overlay, Subheading } from './HeroStyle';

const Hero = () => {
    return (
        <HeroWrapper>
        <Overlay>
          <Content>
            <Heading>
              Centar za podršku studentima i razvoj karijera
            </Heading>
            <Subheading>
              CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva
              studiranja za studente i studentice FOI-ja na način da ih
              podržava, motivira i karijerno usmjerava. Svojim aktivnostima
              pomaže im kako bi se uspješno nosili s akademskim izazovima,
              napredovali kroz studij i počeli graditi svoju karijeru već
              tijekom studentskih dana.
            </Subheading>
          </Content>
        </Overlay>
      </HeroWrapper>
    );
}

export default Hero;

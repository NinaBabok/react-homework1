import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="section-hero">
        <div className="section-hero__overlay">
          <div className="section-hero__content">
            <h1 className="section-hero__heading">
              Centar za podršku studentima i razvoj karijera
            </h1>
            <p className="section-hero__subheading">
              CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva
              studiranja za studente i studentice FOI-ja na način da ih
              podržava, motivira i karijerno usmjerava. Svojim aktivnostima
              pomaže im kako bi se uspješno nosili s akademskim izazovima,
              napredovali kroz studij i počeli graditi svoju karijeru već
              tijekom studentskih dana.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;

import React from 'react';
import './Section.scss';

const Section = ({title, children, className=""}) => {
    return (
      <section className="section">
        <h1 className="section__title">{title}</h1>
        <div className={className}>{children}</div>
      </section>
    );
}

export default Section;
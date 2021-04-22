import React from 'react';
import './Section.scss';

const Section = ({title, children, event, className=""}) => {
    className += event ?  "Section-Event" : "Section-Events";
    return (
      <section className="Section">
        <h1 className="Section-Title">{title}</h1>
        <div className={className}>{children}</div>
      </section>
    );
}

export default Section;
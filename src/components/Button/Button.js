import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.scss";

const Button = ({value, children, to}) => {
    return to ? (
      <Link to={to} className="Button">
        {children || value}
      </Link>
    ) : (
      <button className="Button" value={value}>
        {children}
      </button>
    );
}

export default Button;
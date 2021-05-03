import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonWrapper } from "./ButtonStyle";

export default function Button({to, children}) {

  const history = useHistory();

  function handleClick() {
    to && history.push(to);
  }

  return <ButtonWrapper type="button" onClick={handleClick}>{children}</ButtonWrapper>;
}
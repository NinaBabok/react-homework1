import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonWrapper } from "./ButtonStyle";

export default function Button(props) {

  const history = useHistory();

  function handleClick() {
    props.to && history.push(props.to);
  }

  return <ButtonWrapper type={props.type ? props.type : "button"} onClick={props.onClick ? props.onClick : handleClick} gridSpan={props.gridSpan ? true : false}>{props.children}</ButtonWrapper>;
}
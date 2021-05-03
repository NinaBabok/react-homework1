import React from 'react';
import { SearchBarWrapper } from './SearchBarStyle';

export const SearchBar = (props) => {

    

    return (
      <SearchBarWrapper
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.onValueChange(e)}
      ></SearchBarWrapper>
    );
}
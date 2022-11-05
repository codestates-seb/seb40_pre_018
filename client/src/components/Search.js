/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/images/searchIcon.svg';
import { search } from '../redux/searchSlice';

const SearchContainer = styled.form`
  position: relative;
  flex-grow: 1;

  #search-icon {
    position: absolute;
    left: 0.5em;
    top: 50%;
    margin-top: -9px;
  }
`;

const SearchBar = styled.input`
  display: block;
  width: 100%;
  background-color: #fff;
  border: 1px solid var(--black-200);
  font-size: 13px;
  color: var(--black-700);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  padding-left: 32px;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 0px 4px var(--powder-200);
    border-color: var(--blue-600);
  }
`;

const Search = () => {
  const [searchVal, setSearchVal] = useState('');

  const dispatch = useDispatch();

  const onChangeSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchVal));
  };

  return (
    <SearchContainer onSubmit={onSubmit}>
      <SearchIcon
        id="search-icon"
        width="18px"
        height="18px"
        fill="hsl(210,8%,55%)"
      />
      <SearchBar
        onChange={onChangeSearch}
        value={searchVal}
        placeholder="Search..."
      />
    </SearchContainer>
  );
};

export default Search;

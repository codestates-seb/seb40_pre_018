import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/images/searchIcon.svg';

const SearchContainer = styled.div`
  position: relative;
  width: 650px;

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
  background-color: var(--white);
  border: 1px solid var(--black-200);
  font-size: 13px;
  color: var(--black-700);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  padding-left: 32px;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon
        id="search-icon"
        width="18px"
        height="18px"
        fill="hsl(210,8%,55%)"
      />
      <SearchBar placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;

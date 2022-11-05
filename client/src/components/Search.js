import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/images/searchIcon.svg';
import { Input } from './InputStyles';

const SearchContainer = styled.div`
  position: relative;
  padding: 0 8px;
  display: flex;
  align-items: center;
  flex-grow: 1;

  #search-bar {
    margin: 0;
    padding-left: 32px;
  }

  #search-icon {
    position: absolute;
    left: 17px;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <Input id="search-bar" placeholder="Search..." />
      <SearchIcon id="search-icon" />
    </SearchContainer>
  );
};

export default Search;

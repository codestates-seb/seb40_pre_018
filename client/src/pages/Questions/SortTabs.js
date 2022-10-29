import styled from 'styled-components';
import { SortBtn } from '../../components/Buttons';

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  font-size: 17px;
  color: var(--black-600);
`;

const SortTabs = () => {
  return (
    <SortContainer>
      <div>
        <SortBtn>newest</SortBtn>
        <SortBtn>voted</SortBtn>
      </div>
    </SortContainer>
  );
};

export default SortTabs;

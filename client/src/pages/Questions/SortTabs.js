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
  const countQuestions = '7,079,803';
  return (
    <SortContainer>
      <h4> {countQuestions} questions</h4>
      <div>
        <SortBtn>newest</SortBtn>
        <SortBtn>voted</SortBtn>
      </div>
    </SortContainer>
  );
};

export default SortTabs;

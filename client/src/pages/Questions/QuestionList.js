import styled from 'styled-components';

const QuestionListPage = styled.section`
  /* 컨텐츠가 아직 없어서 임의로 준 height */
  height: 1000px;
  /* width: 775px; */
  flex: 1;
  border-left: 1px solid var(--black-050);
`;

const QuestionList = () => {
  return <QuestionListPage></QuestionListPage>;
};

export default QuestionList;

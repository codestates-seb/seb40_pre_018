import { useState } from 'react';
import styled from 'styled-components';
import { AskBtn } from '../../components/Buttons';
import QDummyData from './QuestionDummy';
import Qusetions from './Qusetions';
import SortTabs from './SortTabs';

const QuestionListPage = styled.div`
  height: 100%;
  /* position: relative; */
  width: 75%;
  /* padding-right: 50px; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 10px 24px 20px 0;
  border-left: 1px solid var(--black-050);
  flex-direction: column;
`;

const QuestionHeader = styled.header`
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: var(--black-700);
`;

const QuestionList = () => {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestion] = useState([QDummyData]);

  return (
    <>
      <QuestionListPage>
        <QuestionHeader>
          <h1>All Questions</h1>
          <AskBtn>Ask Qusetions</AskBtn>
        </QuestionHeader>
        <SortTabs />
        <div>
          {questions.map((question) => (
            <Qusetions key={question.id} questions={question} />
          ))}
        </div>
      </QuestionListPage>
    </>
  );
};

export default QuestionList;

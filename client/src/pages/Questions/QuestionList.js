/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AskBtn } from '../../components/Buttons';
import QDummyData from './QuestionDummy';
import Qusetions from './Qusetions';
// import SortTabs from './SortTabs';
import { SortBtn } from '../../components/Buttons';

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
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [totalNum, setTotalNum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://15.165.244.155:8080/questions?page=${page}&size=${size}`
        );
        setQuestion(response.data.data);
        setTotalNum(response.data.pageInfo.totalElements);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [size, page]);

  const SortContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
    font-size: 17px;
    color: var(--black-600);
  `;

  return (
    <>
      <QuestionListPage>
        <QuestionHeader>
          <h1>All Questions</h1>
          <AskBtn>Ask Qusetions</AskBtn>
        </QuestionHeader>
        <SortContainer>
          <h4> {totalNum} questions</h4>
          <div>
            <SortBtn>newest</SortBtn>
            <SortBtn>voted</SortBtn>
          </div>
        </SortContainer>
        <div>
          {questions.map((question) => {
            return <Qusetions key={question.questionId} questions={question} />;
          })}
        </div>
      </QuestionListPage>
    </>
  );
};

export default QuestionList;

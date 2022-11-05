/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AskBtn, BottomBtn, SortBtn } from '../../components/Buttons';
import Questions from './Questions';

const QuestionListPage = styled.div`
  height: 100%;
  /* position: relative; */
  width: 75%;
  display: flex;
  padding: 10px 24px 20px 0;
  border-left: 1px solid var(--black-075);
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

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  font-size: 17px;
  color: var(--black-600);
`;

const FooterBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 80px;
  border-top: 1px solid var(--black-075);
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

  // const

  // 정렬 탭 기능 구현
  // 최신 정렬
  const onNewestHandler = () => {
    let newArr = [...questions];
    let newestResult = newArr.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    setQuestion(newestResult);
  };
  // 투표 순 정렬
  const onVotedHandler = () => {
    let newArr = [...questions];
    let voteResult = newArr.sort((a, b) => {
      return a.voteCount - b.voteCount;
    });
    setQuestion(voteResult);
  };

  // 최하단 페이지 이동버튼 이벤트 구현
  const pageHandle = (pageValue) => {
    if (pageValue === 'Next') {
      if (page >= 5) {
        return;
      }
      setPage(page + 1);
    } else if (pageValue === 'Prev') {
      if (page <= 1) {
        return;
      }
      setPage(page - 1);
    } else {
      setPage(pageValue);
    }
  };

  const navigate = useNavigate();
  const askHandle = () => {
    navigate('/ask');
  };

  return (
    <>
      <QuestionListPage>
        <QuestionHeader>
          <h1>All Questions</h1>
          <AskBtn
            onClick={() => {
              askHandle();
            }}
          >
            Ask Questions
          </AskBtn>
        </QuestionHeader>
        {/* 정렬 탭 */}
        <SortContainer>
          <h4> {totalNum} questions</h4>
          <div>
            <SortBtn onClick={onNewestHandler}>newest</SortBtn>
            <SortBtn onClick={onVotedHandler}>voted</SortBtn>
          </div>
        </SortContainer>
        <div>
          {questions.map((question, index) => {
            return (
              <Questions
                key={question.questionId}
                questions={question}
                userName={question.author}
                index={index}
              />
            );
          })}
        </div>
        <FooterBtnContainer>
          <div>
            <BottomBtn
              onClick={() => {
                pageHandle('Prev');
              }}
            >
              Prev
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle(1);
              }}
            >
              1
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle(2);
              }}
            >
              2
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle(3);
              }}
            >
              3
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle(4);
              }}
            >
              4
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle(5);
              }}
            >
              5
            </BottomBtn>
            <BottomBtn
              onClick={() => {
                pageHandle('Next');
              }}
            >
              Next
            </BottomBtn>
          </div>
        </FooterBtnContainer>
      </QuestionListPage>
    </>
  );
};

export default QuestionList;

/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AskBtn, BottomBtn, SortBtn } from '../../components/Buttons';
import Loading from '../../components/Loading';
import Questions from './Questions';

const QuestionListPage = styled.div`
  width: calc(100% - 164px - 324px);
  height: 100%;
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

  > h1 {
    font-weight: 500;
    font-size: 27px;
  }
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  font-size: 17px;
  color: var(--black-600);

  > h4 {
    font-weight: 500;
  }
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalNum, setTotalNum] = useState(0);
  const searchInput = useSelector((state) => state.searchReducer.searchValue);
  const { render } = useSelector((state) => state.renderReducer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchInput === '') {
          const response = await axios.get(
            `http://15.165.244.155:8080/questions?page=${page}&size=15`
          );
          setLoading(false);
          setQuestion(response.data.data);
          setTotalNum(response.data.pageInfo.totalElements);
        } else {
          const response = await axios.get(
            `http://15.165.244.155:8080/questions/search?q=${searchInput}&page=${page}&size=15`
          );
          setLoading(false);
          setQuestion(response.data.data);
          setTotalNum(response.data.pageInfo.totalElements);
        }
      } catch (e) {
        setLoading(true);
        window.alert('오류가 발생했습니다.');
      }
    };
    fetchData();
  }, [page, searchInput, render]);

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
      return b.voteCount - a.voteCount;
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
  const { user } = useSelector((state) => state.loginReducer);

  const askHandle = () => {
    if (user) navigate('/ask');
    else navigate('/login');
  };

  return (
    <QuestionListPage>
      <QuestionHeader>
        {/* QuestionList 타이틀 */}
        {searchInput === '' ? <h1>All Questions</h1> : <h1>Search Result</h1>}
        <AskBtn
          onClick={() => {
            askHandle();
          }}
        >
          Ask Question
        </AskBtn>
      </QuestionHeader>
      {/* 정렬 탭 */}
      {!loading ? (
        <div className="all-questions-container">
          <SortContainer>
            {searchInput === '' ? (
              <h4> {totalNum} questions</h4>
            ) : (
              <div>
                <h5> Result for &quot; {searchInput} &quot; </h5>
                <h4> {totalNum} results</h4>
              </div>
            )}
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
        </div>
      ) : (
        <Loading />
      )}
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
            bgColor={page === 1}
            onClick={() => {
              pageHandle(1);
            }}
          >
            1
          </BottomBtn>
          <BottomBtn
            bgColor={page === 2}
            onClick={() => {
              pageHandle(2);
            }}
          >
            2
          </BottomBtn>
          <BottomBtn
            bgColor={page === 3}
            onClick={() => {
              pageHandle(3);
            }}
          >
            3
          </BottomBtn>
          <BottomBtn
            bgColor={page === 4}
            onClick={() => {
              pageHandle(4);
            }}
          >
            4
          </BottomBtn>
          <BottomBtn
            bgColor={page === 5}
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
  );
};

export default QuestionList;

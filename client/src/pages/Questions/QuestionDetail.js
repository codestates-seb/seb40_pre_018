import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { getDaysElapsed } from '../../utils/timeElapsed';
import { CommonButton } from '../../components/Buttons';
import { Content } from '../../components/Content';
import { fetchCreate } from '../../utils/api';
import NotFound from '../../components/NotFound';
import TextEditor from '../../components/TextEditor';
import { useSelector } from 'react-redux';

// 전체 감싸는 컨테이너 - 스타일링 및 배치용
const Container = styled.article`
  width: 100%;
  padding: 24px;
  border-left: 1px solid var(--black-100);
  height: 100%;

  .answer-container {
    padding: 16px 0;
    border-bottom: 1px solid var(--black-075);
  }

  .submit-answer-btn {
    margin: 10px 0 15px;
  }
`;

// QuestionHeader와 그 내부 요소들 스타일링
const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0 0 8px 0;
    font-size: 27px;
    font-weight: 400;

    a {
      color: var(--black-700);
    }
  }

  .ask-question-btn {
    display: block;
    white-space: nowrap;
    height: 37px;
  }
`;

// QuestionHeader 아래 날짜 및 조회수 정보 스타일링 및 컴포넌트
const SubHeaderWrapper = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--black-100);

  div {
    font-size: 13px;
    margin-bottom: 8px;
    margin-right: 16px;

    span {
      color: var(--fc-light);
      margin: 2px 6px 2px 2px;
    }
  }
`;

const QuestionSubHeader = ({ createdAt, updatedAt, views }) => {
  return (
    <SubHeaderWrapper>
      <div>
        <span>Asked</span>
        <time>{getDaysElapsed(createdAt)}</time>
      </div>
      {updatedAt && (
        <div>
          <span>Modified</span>
          <time>{getDaysElapsed(updatedAt)}</time>
        </div>
      )}
      <div>
        <span>Viewed</span>
        {views} times
      </div>
    </SubHeaderWrapper>
  );
};

// 답변 목록 헤더 스타일링 및 컴포넌트
const AnswersHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .answer-count {
    font-weight: 400;
    font-size: 1.46153846rem;
  }

  .new-answer {
    h2 {
      font-weight: 400;
      font-size: 1.46153846rem;
    }
  }
`;

const AnswersHeader = ({ count }) => {
  return (
    <AnswersHeaderWrapper>
      <h2 className="answer-count">
        {count > 0 && count + (count === 1 ? ' answer' : ' answers')}
      </h2>
    </AnswersHeaderWrapper>
  );
};

// 답변 작성란 헤더 스타일링
const YourAnswerHeader = styled.h2`
  padding-top: 20px;
  margin: 0 0 1em;
  font-size: 1.46153846rem;
  font-weight: 400;
  line-height: 1.3;
`;

// 여기서부터!
const QuestionDetail = () => {
  const params = useParams();
  const url = 'http://15.165.244.155:8080/questions/' + [params.id];
  const [questionData, setQuestionData] = useState(null);
  const [yourAnswer, setYourAnswer] = useState('');
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.loginReducer);

  const handleAskQuestion = () => {
    if (user) navigate('/ask');
    else navigate('/login');
  };

  const handleAnswerSubmit = () => {
    const data = { content: yourAnswer };
    fetchCreate(
      `http://15.165.244.155:8080/questions/${params.id}/answers`,
      data
    );
    setYourAnswer('');
    location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await axios(url);
        setQuestionData({ ...res.data });
      } catch (err) {
        console.error(err);
      }
      setIsPending(false);
    };
    fetchData();
  }, [url]);

  if (isPending && questionData === null) return <div>질문 불러오는 중...</div>;
  if (questionData === null) return <NotFound />;
  if (questionData) {
    return (
      <Container>
        <QuestionHeader>
          <h1>
            <a
              href={
                'https://stackoverflow.com/questions/' + questionData.questionId
              }
              target="_blank"
              rel="noreferrer"
            >
              {questionData.title}
            </a>
          </h1>
          <CommonButton
            bgColor="var(--blue-500)"
            color="#fff"
            border="transparent"
            onClick={() => {
              handleAskQuestion();
            }}
            className="ask-question-btn"
          >
            Ask Question
          </CommonButton>
        </QuestionHeader>
        <QuestionSubHeader
          createdAt={questionData.createdAt}
          updatedAt={questionData.updatedAt}
          views={questionData.views}
        />
        <Content
          type="question"
          author={questionData.author}
          content={questionData.content}
          votes={questionData.voteCount}
          isUpVoter={questionData.isUpVoter}
          isDownVoter={questionData.isDownVoter}
          createdAt={questionData.createdAt}
          updatedAt={questionData.updatedAt}
          id={questionData.questionId}
          questionData={questionData}
          updateData={setQuestionData}
          // tags={ans.tags}
        />
        {questionData.answers.length > 0 && (
          <>
            <AnswersHeader count={questionData.answers.length} />
            {questionData.answers.map((answer) => {
              return (
                <Content
                  key={'answer' + answer.answerId}
                  type="answer"
                  author={answer.author}
                  content={answer.content}
                  votes={answer.voteCount}
                  isUpVoter={answer.isUpVoter}
                  isDownVoter={answer.isDownVoter}
                  createdAt={answer.createdAt}
                  updatedAt={answer.updatedAt}
                  id={answer.answerId}
                  questionData={questionData}
                  updateData={setQuestionData}
                  // tags={ans.tags}
                />
              );
            })}
          </>
        )}

        <YourAnswerHeader>Your Answer</YourAnswerHeader>
        <TextEditor onChangeHandler={setYourAnswer} />
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          className="submit-answer-btn"
          onClick={() => handleAnswerSubmit()}
        >
          Post Your Answer
        </CommonButton>
      </Container>
    );
  }
};

export default React.memo(QuestionDetail);

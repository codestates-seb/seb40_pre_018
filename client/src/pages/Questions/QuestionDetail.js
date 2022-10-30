import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { getDaysElapsed } from '../../utils/timeElapsed';
import { CommonButton } from '../../components/Buttons';
import { Content } from '../../components/Content';
import { Editor } from '../../components/Editor';
import { fetchCreate } from '../../utils/api';

// // Dummy Data: 답변 목록
const AData = {
  1: [
    {
      content: `Solution 1: Separated npm package
    In my project, I separated my core parts with each npm package.

    Create npm package and put your shared components into that.
    You can test immediately your shared component's function with npm link or specify your local package's absolute path with npm install.
    If you want to manage your package more intuitive way, then you can publish your package to npm repository with private mode.
    Solution 2: Depend on the environment variable
    You can separate your running environment with react-native-config. With this package, created multiple environments .env or .env.production you can separate your runtime variables with ENVFILE=.env npm start or ENVFILE=.env.production npm start. Then in your javascript code, you can refer your each runtime settings.

    import Config from 'react-native-config';

    const isProduction = Config.environment === 'production';

    <Image source={isProduction ? require(..production_image) : require(..development_image)} />
    How to show your slight difference in your app depends on you. like Platform.os === 'ios'`,
      modified: '2022-10-28 03:40:20Z',
      answered: '2020-04-24 09:39:34Z',
      votes: 2,
      author: {
        userId: 10199138,
        displayName: 'MJ Studio',
      },
    },
    {
      content: `Refere this: https://github.com/luggit/react-native-config

      You can create different builds : Production, staging, testing.

      You can set multiple environment and generate build.`,
      answered: '2020-04-24 08:16:42Z',
      votes: 0,
      author: {
        userId: 11136807,
        displayName: 'Vinit Bhavsar',
      },
    },
  ],
};

// 전체 감싸는 컨테이너 - 스타일링 및 배치용
const Container = styled.div`
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
  // dummy data - 답변 (안쓰게 되면 지울 예정입니다!)
  const answerData = AData[1];

  const params = useParams();
  const url = 'http://15.165.244.155:8080/questions/' + [params.id];
  const [questionData, setQuestionData] = useState(null);
  const [yourAnswer, setYourAnswer] = useState('');
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();
  const handleAskQuestion = () => {
    navigate('/ask');
  };

  const handleAnswerSubmit = () => {
    const data = { content: yourAnswer };
    fetchCreate(
      `http://15.165.244.155:8080/questions/${params.id}/answers`,
      data
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await axios(url);
        setQuestionData(res.data);
      } catch (err) {
        console.error(err);
      }
      setIsPending(false);
    };
    fetchData();
  }, [url]);

  if (isPending) return <div>질문 불러오는 중...</div>;
  if (questionData === null) return <div>Question Not Found</div>;
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
          votes={questionData.votes}
          createdAt={questionData.createdAt}
          updatedAt={questionData.updatedAt}
          // tags={ans.tags}
        />
        {answerData.length > 0 && (
          <>
            <AnswersHeader count={answerData.length} />
            {answerData.map((ans) => {
              return (
                <Content
                  key={'answer' + ans.author.userId}
                  type="answer"
                  author={ans.author}
                  content={ans.content}
                  votes={ans.votes}
                  createdAt={ans.answered}
                  updatedAt={ans.modified}
                  // tags={ans.tags}
                />
              );
            })}
          </>
        )}

        <YourAnswerHeader>Your Answer</YourAnswerHeader>
        <Editor value={yourAnswer} onChangeHandler={setYourAnswer} />
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

export default QuestionDetail;

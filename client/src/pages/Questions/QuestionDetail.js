import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { getDaysElapsed } from '../../utils/timeElapsed';
import { CommonButton } from '../../components/Buttons';
import { Content } from '../../components/Content';
import { Editor } from '../../components/Editor';

// Dummy Data: 질문 내용
const QuestionData = {
  74216860: {
    title: 'ZeroSSL Renew SSL Certification',
    description: `So, my SSL certificate is about to be expired soon (in 2 weeks). I have just successfully issued a renew certificate yesterday, but when I check my website, it still shows the old certificate. Is there a way to just use the new certificate like maybe deleting the existing one? And if the existing certificate expired, does it automatically use the new one?

    Tried contacting the zeroSSL team but no answers.
    `,
    asked: '2022-10-27T04:36:53',
    modified: '2022-10-27 09:11:32Z',
    viewed: 5,
    votes: 0,
    tags: ['ssl', 'ssl-certificate', 'certificate', 'zerossl'],
    userName: 'jyra',
    userId: 20029765,
    userAvatar:
      'https://lh3.googleusercontent.com/a/ALm5wu05SozAqjV6AOH-pl2agcvsSQjxo_CGCIl3XEq3=k-s64',
    userReputation: 1,
    userBadge: { bronze: 1 },
  },
  61341913: {
    title: 'Share react native components across repos',
    description: `I have three react native projects each with their own repo.

    They use very similar components, is there a way I can share these components across repo's, so I don't have to update each repo independently?
    
    Or can I create three different apps, from one repo? with only very slight changes to images and configs for each app.
    `,
    asked: '2020-04-21T10:59:06',
    modified: '2022-10-28 03:40:20Z',
    viewed: 253,
    votes: 2,
    tags: ['javascript', 'reactjs', 'git', 'react-native'],
    userName: 'bomber',
    userId: 1901521,
    userAvatar: 'https://i.stack.imgur.com/OucX9.jpg?s=64&g=1',
    userReputation: 9445,
    userBadge: { gold: 22, silver: 84, bronze: 157 },
  },
};

// Dummy Data: 답글 내용
const AnswerData = {
  74216860: [
    {
      description: `You could do something like the below code.

      Step-wise details:

      Split the text string around ** to create an array arr of string.
      The string inside the **...** will be at odd indices in arr array.
      So, wrap strings at odd indices with bold-styled Text component and other strings at even indices(i.e. which are outside the **...** block) with simple Text component.
      Append these Text components to an array.
      Render this array of Text components in another Text component to display all of them as a single component on the same line.`,
      modified: '2022-10-27 13:34:52Z',
      answered: '2022-10-27 12:48:24Z',
      votes: 1,
      userName: 'John Doe',
      userId: 7040601,
      userAvatar:
        'https://www.gravatar.com/avatar/8645047cc60a3d4cc3a43239b5b523bf?s=64&d=identicon&r=PG&f=1',
      userReputation: 1996,
      userBadge: { gold: 1, silver: 18, bronze: 26 },
    },
  ],
  61341913: [
    {
      description: `Solution 1: Separated npm package
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
      userName: 'MJ Studio',
      userId: 10199138,
      userAvatar:
        'https://www.gravatar.com/avatar/8645047cc60a3d4cc3a43239b5b523bf?s=64&d=identicon&r=PG&f=1',
      userReputation: 3220,
      userBadge: { silver: 20, bronze: 32 },
    },
    {
      description: `Refere this: https://github.com/luggit/react-native-config

      You can create different builds : Production, staging, testing.

      You can set multiple environment and generate build.`,
      answered: '2020-04-24 08:16:42Z',
      votes: 0,
      userName: 'Vinit Bhavsar',
      userId: 11136807,
      userAvatar:
        'https://www.gravatar.com/avatar/8645047cc60a3d4cc3a43239b5b523bf?s=64&d=identicon&r=PG&f=1',
      userReputation: 218,
      userBadge: { silver: 3, bronze: 13 },
    },
  ],
};

// 전체 감싸는 컨테이너
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

// QuestionHeader와 그 내부 요소들
const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* position: relative; */

  h1 {
    margin: 0 0 8px 0;
    font-size: 27px;
    font-weight: 400;
  }

  .ask-question-btn {
    display: block;
    white-space: nowrap;
    height: 37px;
  }
`;

// QuestionSubheader - QuestionHeader 아래 날짜 및 조회수 정보
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

const QuestionSubHeader = ({ asked, modified, views }) => {
  return (
    <SubHeaderWrapper>
      <div>
        <span>Asked</span>
        <time>{getDaysElapsed(asked)}</time>
      </div>
      <div>
        <span>Modified</span>
        <time>{getDaysElapsed(modified)}</time>
      </div>
      <div>
        <span>Viewed</span>
        {views} times
      </div>
    </SubHeaderWrapper>
  );
};

// 답변 헤더
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
  const question = QuestionData[params.id];
  const answer = AnswerData[params.id];
  const [yourAnswer, setYourAnswer] = useState('');

  const handleSignUp = () => {
    useNavigate('/login');
  };

  return (
    <Container>
      <QuestionHeader>
        <h1>
          <a
            href={'https://stackoverflow.com/questions/' + params.id}
            target="_blank"
            rel="noreferrer"
          >
            {question.title}
          </a>
        </h1>
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          onClick={handleSignUp}
          className="ask-question-btn"
        >
          Ask Question
        </CommonButton>
      </QuestionHeader>
      <QuestionSubHeader
        asked={question.asked}
        modified={question.modified}
        views={question.viewed}
      />
      <Content
        type="question"
        votes={question.votes}
        description={question.description}
        tags={question.tags}
        modified={question.modified}
        created={question.asked}
        userAvatar={question.userAvatar}
        userName={question.userName}
        userId={question.userId}
        userReputation={question.userReputation}
        userBadge={question.userBadge}
      />
      <AnswersHeader count={answer.length} />
      {answer.map((ans) => {
        return (
          <Content
            key={'answer' + ans.userId}
            type="answer"
            votes={ans.votes}
            description={ans.description}
            tags={ans.tags}
            modified={ans.modified}
            created={ans.answered}
            userAvatar={ans.userAvatar}
            userName={ans.userName}
            userId={ans.userId}
            userReputation={ans.userReputation}
            userBadge={ans.userBadge}
          />
        );
      })}

      <YourAnswerHeader>Your Answer</YourAnswerHeader>
      <Editor value={yourAnswer} onChangeHandler={setYourAnswer} />
      <CommonButton
        bgColor="var(--blue-500)"
        color="#fff"
        border="transparent"
        className="submit-answer-btn"
      >
        Post Your Answer
      </CommonButton>
    </Container>
  );
};

export default QuestionDetail;

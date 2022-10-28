import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getDaysElapsed } from '../../utils/timeElapsed';
import { CommonButton } from '../../components/Buttons';
import { Content } from '../../components/Content';

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
      userName: '',
      userId: 7040601,
      userAvatar:
        'https://www.gravatar.com/avatar/8645047cc60a3d4cc3a43239b5b523bf?s=64&d=identicon&r=PG&f=1',
      userReputation: 1996,
      userBadge: { gold: 1, silver: 18, bronze: 26 },
    },
  ],
  61341913: [{}],
};

// 전체 감싸는 컨테이너
const Container = styled.div`
  padding: 24px;
  border-left: 1px solid var(--black-100);
  height: 100%;
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

// 답변 컨테이너
const AnswersContainer = styled.div`
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

// 여기서부터!
const QuestionDetail = () => {
  const params = useParams();
  const question = QuestionData[params.id];
  const answer = AnswerData[params.id];

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
        asked={question.asked}
        userAvatar={question.userAvatar}
        userName={question.userName}
        userId={question.userId}
        userReputation={question.userReputation}
        userBadge={question.userBadge}
      />

      <AnswersContainer>
        <div className="answers">
          <h2 className="answer-count">
            {answer.length > 0 &&
              (answer.length > 1
                ? `${answer.length} answers`
                : `${answer.length} answer`)}
          </h2>
        </div>
        <div className="new-answer">
          <h2>Your Answer</h2>
        </div>
      </AnswersContainer>
    </Container>
  );
};

export default QuestionDetail;

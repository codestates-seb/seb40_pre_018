import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getDaysElapsed, getTimeElapsed } from '../../util/timeElapsed';
import { ReactComponent as VoteUpIcon } from '../../assets/images/voteUp.svg';
import { ReactComponent as VoteDownIcon } from '../../assets/images/voteDown.svg';

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

// 매개변수로 들어온 날짜 ~ 오늘까지 경과한 날짜(일, 개월, 연도)를 반환하는 함수
// const getDaysElapsed = (date) => {
//   const comparingDate = new Date(date).getTime();
//   const currentDate = new Date().getTime();
//   const daysElapsed = Math.floor((currentDate - comparingDate) / 8.64e7);

//   // 31일 미만은 날짜 단위로 반환합니다.
//   if (daysElapsed < 31) {
//     if (daysElapsed === 0) return 'today';
//     else if (daysElapsed === 1) return 'yesterday';
//     else return `${daysElapsed} days ago`;
//   }

//   // 12달 미만은 개월 단위로 반환합니다.
//   const monthsElapsed = Math.floor(daysElapsed / 30);
//   if (monthsElapsed < 12)
//     return monthsElapsed === 1
//       ? `${monthsElapsed} month ago`
//       : `${monthsElapsed} months ago`;

//   // 그 이상은 연도 수와 개월 수(연도 계산하고 남은 개월 수가 0 이상일 때)를 반환합니다.
//   const yearsElapsed = Math.floor(monthsElapsed / 12);
//   let yearsAndMonth =
//     yearsElapsed === 1 ? `${yearsElapsed} year` : `${yearsElapsed} years`;

//   const monthsLeft = Math.floor(monthsElapsed % 12);
//   if (monthsLeft > 0) {
//     yearsAndMonth +=
//       monthsLeft === 1 ? `, ${monthsLeft} month` : `, ${monthsLeft} months`;
//   }
//   return yearsAndMonth + ' ago';
// };

// // 매개변수로 들어온 시간 ~ 오늘까지 경과한 시간(초, 분, 시)를 반환하는 함수
// const getTimeElapsed = (time) => {
//   const comparingDate = new Date(time).getTime();
//   const currentDate = new Date().getTime();
//   const secondsElapsed = Math.floor((currentDate - comparingDate) / 1000);
//   // 60초 미만은 초 단위로 반환합니다.
//   if (secondsElapsed < 60)
//     return secondsElapsed === 1
//       ? `${secondsElapsed} second ago`
//       : `${secondsElapsed} seconds ago`;

//   // 60분 미만은 분 단위로 반환합니다.
//   const minutesElapsed = Math.floor(secondsElapsed / 60);
//   if (minutesElapsed < 60)
//     return minutesElapsed === 1
//       ? `${minutesElapsed} minute ago`
//       : `${minutesElapsed} minutes ago`;

//   // 그 이상은 시간 단위로 반환합니다.
//   const hoursElapsed = Math.floor(minutesElapsed / 60);
//   if (hoursElapsed < 60)
//     return hoursElapsed === 1
//       ? `${hoursElapsed} hour ago`
//       : `${hoursElapsed} hours ago`;
// };

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
`;

// QuestionHeader내 AskQuestionBtn
// SignupBtn을 변형 (그대로 쓰니 글자가 다음 줄로 넘어감ㅜ)
const AskQuestionBtn = styled.button`
  /* position: absolute; */
  /* right: 0; */
  text-align: left;
  display: block;
  margin-left: 12px;
  padding: 0.8em;
  background-color: var(--blue-500);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: 1px solid transparent;
  border-radius: 3px;
  color: white;
  font-size: 13px;
  white-space: nowrap;
  height: 37px;
  cursor: pointer;
`;

// QuestionHeader 아래 날짜 및 조회수
const QuestionInfo = styled.div`
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

// 메인 콘텐츠(헤더 아래 ~ 태그/작성자 정보(+댓글)) 컨테이너
const QuestionContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

// 메인 콘텐츠 (질문 내용 ~ 답변 전까지)
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

// 투표 버튼과 현재 투표 수
const VoteContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  div {
    text-align: center;
    font-size: 21px;
    color: var(--black-500);
    font-weight: 400;
  }

  .voting-button {
    height: 36px;
    width: 36px;
    margin: 2px;
    display: flex;
    padding: 0;
    background: none;
    border: none;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

// 질문 내용과 태그, 작성자 정보, (+ 댓글)
const Question = styled.div`
  p {
    margin: 0;
    font-size: 15px;
    line-height: 22.5px;
  }
`;

// 태그 리스트와 태그
const Tags = styled.ul`
  display: flex;
  margin-top: 24px;
  margin-bottom: 27px;

  li {
    margin-right: 4px;

    span {
      margin: 2px 2px 2px 0px;
      padding: 0.4em 0.5em;
      border-radius: 3px;
      font-size: 12px;
      color: var(--powder-700);
      background-color: var(--powder-100);
    }
  }
`;

// 태그 하단 공유 ~ 작성자 정보 컨테이너
const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 16px 0;
  padding-top: 4px;

  .modified-date {
    font-size: 12px;
    color: var(--blue-600);
  }
`;

// 공유, 수정, 삭제 옵션들
const Options = styled.div`
  display: flex;
  color: var(--black-500);
  font-size: 13px;
  margin: -4px;

  div {
    margin: 4px;
    cursor: pointer;
  }
`;

// 작성자 정보 박스(하늘색 박스)
const UserInfo = styled.div`
  width: 200px;
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
  background-color: rgb(217, 234, 247);
  color: var(--black-500);

  span {
    font-size: 12px;
  }

  .avatar-wrapper {
    float: left;
    width: 32px;
    height: 32px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 3px;
    }
  }

  .user-detail {
    float: left;
    margin-left: 8px;
    font-size: 13px;

    a {
      color: var(--blue-600);
    }

    .user-scores {
      margin-bottom: -4px;
    }
  }
`;

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

  console.log(answer.length);
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
        <AskQuestionBtn onClick={handleSignUp}>Ask Question</AskQuestionBtn>
      </QuestionHeader>
      <QuestionInfo>
        <div>
          <span>Asked</span>
          <time>{getDaysElapsed(question.asked)}</time>
        </div>
        <div>
          <span>Modified</span>
          <time>{getDaysElapsed(question.modified)}</time>
        </div>
        <div>
          <span>Viewed</span>
          {question.viewed} times
        </div>
      </QuestionInfo>
      <QuestionContent>
        <VoteContainer>
          <button className="voting-button">
            <VoteUpIcon fill="var(--black-200)" />
          </button>
          <div>{question.votes}</div>
          <button className="voting-button">
            <VoteDownIcon fill="var(--black-200)" />
          </button>
        </VoteContainer>
        <MainContent>
          <Question>
            <p>{question.description}</p>
          </Question>
          <Tags>
            {question.tags.map((tag) => {
              return (
                <li key={tag}>
                  <span>{tag}</span>
                </li>
              );
            })}
          </Tags>
          <Utils>
            <Options>
              <div>Share</div>
              <div>Edit</div>
              <div>Delete</div>
            </Options>
            <div className="modified-date">
              {question.modified !== '' && (
                <span>edited {getTimeElapsed(question.modified)}</span>
              )}
            </div>
            <UserInfo>
              <div>
                <span>asked {getTimeElapsed(question.asked)}</span>
              </div>
              <div className="avatar-wrapper">
                <img
                  src={question.userAvatar}
                  alt={question.userName + "'s avatar"}
                />
              </div>
              <div className="user-detail">
                <a
                  href={
                    'https://stackoverflow.com/questions/7' + question.userId
                  }
                >
                  {question.userName}
                </a>
                <div className="user-scores">
                  <span>{question.userReputation}</span>
                  <span>
                    {Object.keys(question.userBadge).map((badge) => {
                      return (
                        <span key={badge} className={badge}>
                          {question.userBadge[badge]}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            </UserInfo>
          </Utils>
        </MainContent>
      </QuestionContent>
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

// edited 4 hours ago
// edited 54 secs ago

export default QuestionDetail;
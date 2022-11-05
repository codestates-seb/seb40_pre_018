/* eslint-disable react/jsx-key */
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { getTimeElapsed, getDaysElapsed } from '../../utils/timeElapsed';

// 질문 폼 전체 컨테이너
const QuestionContainer = styled.div`
  .questions {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .container {
    display: flex;
    border-top: 1px solid var(--black-075);
  }

  .question-title {
    font-size: 17px;
    font-weight: 400;
    color: var(--blue-600);
    padding: 10px 0 5px 0;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
  }
  .question-content {
    color: var(--black-700);
    padding: 5px 0;
    font-size: 14px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  .user-container {
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    color: var(--black-800);
  }
  .user-icon {
    background-color: var(--black-075);
    font-size: 13px;
    border: 1px solid var(--black-100);
    border-radius: 5px;
    width: 16px;
    height: 16px;
    color: var(--black-700);
    margin-right: 3px;
  }
  .user-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-name {
    color: var(--blue-600);
    padding: 4px;
    font-size: 13px;
  }
  .created-time {
    font-size: 13px;
    color: var(--black-500);
  }
`;

const Qusetions = ({ questions }) => {
  const navigate = useNavigate();
  // 질문 제목 클릭 시 페이지 이동 구현
  const detailQuestionView = (questionId) => {
    navigate(`questions/${questionId}`);
  };

  // 질문 작성 시간 구현
  const getCreatedAt = (time) => {
    let getTime = getTimeElapsed(time);
    if (getTime.split(' ')[0] > 24 && getTime.split(' ')[1] === 'hours') {
      getTime = getDaysElapsed(time);
    }
    return getTime;
  };

  const onKey = () => {
    return;
  };

  return (
    <div>
      <QuestionContainer>
        <>
          <div className="container">
            <PostSummary
              voteNum={questions.voteCount}
              answerNum={questions.answers}
              viewNum={questions.views}
            />
            <div className="questions">
              <div
                className="question-title"
                onClick={() => {
                  detailQuestionView(questions.questionId);
                }}
                onKeyPress={() => {
                  onKey;
                }}
                role="button"
                tabIndex="0"
              >
                {questions.title}
              </div>
              <div className="question-content"> {questions.content} </div>
              <UserInfo>
                <div className="user-container">
                  <div className="user-info-container">
                    <div>
                      <AiOutlineUser className="user-icon" />
                    </div>
                    <div className="user-name">
                      {questions.author.displayName}
                    </div>
                    <div className="created-time">
                      asked {getCreatedAt(questions.createdAt)}
                    </div>
                  </div>
                </div>
              </UserInfo>
            </div>
          </div>
        </>
      </QuestionContainer>
    </div>
  );
};

export default Qusetions;

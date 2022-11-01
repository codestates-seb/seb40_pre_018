/* eslint-disable react/jsx-key */
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { getTimeElapsed, getDaysElapsed } from '../../utils/timeElapsed';

// 질문 폼 전체 컨테이너
const QusetionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: first baseline;
    align-items: center;
    width: 100%;
    border-top: 1px solid var(--black-075);
  }

  .question-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--blue-500);
    margin-bottom: 0.4rem;
    cursor: pointer;
  }
  .question-content {
    color: var(--black-700);
    font-size: 14px;
  }
  .tag-layout {
    width: auto;
    background-color: var(--powder-100);
    height: auto;
    padding: 3px;
    font-size: 12px;
    border-radius: 3px;
    margin-top: 5px;
    color: var(--powder-700);
  }
`;

const UserInfo = styled.div`
  .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 620px;
    color: var(--black-800);
  }
  .user-icon {
    background-color: var(--black-050);
    font-size: 13px;
    border-radius: 3px;
    width: 16px;
    height: 16px;
    color: var(--black-500);
    margin-right: 3px;
  }
  .user-info-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-name {
    color: var(--blue-500);
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
    console.log(getTime);
    if (getTime.split(' ')[0] > 24 && getTime.split(' ')[1] === 'hours') {
      getTime = getDaysElapsed(time);
      console.log(getTime);
    }
    return getTime;
  };

  const onKey = () => {
    return;
  };

  return (
    <div>
      <QusetionContainer>
        <>
          <div className="container">
            <PostSummary
              voteNum={questions.vote}
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
                  {/* 태그 미정 */}
                  <div className="tag-layout"> Javascript</div>
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
      </QusetionContainer>
    </div>
  );
};

export default Qusetions;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

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
    border-top: 1px solid var(--black-100);
  }

  .question-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--blue-600);
    margin-bottom: 0.4rem;
    cursor: pointer;
  }
  .question-content {
    color: var(--black-700);
    font-size: 14px;
  }
`;

const UserInfo = styled.div`
  .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    color: var(--black-800);
  }
  .user-icon {
    background-color: var(--black-050);
    font-size: 20px;
    border-radius: 3px;
    width: 20px;
    color: var(--black-500);
    margin-right: 10px;
  }
`;

const Qusetions = ({ questions }) => {
  const navigate = useNavigate();

  const detailQuestionView = (questionId) => {
    navigate(`/${questionId}`);
  };

  return (
    <div>
      <QusetionContainer>
        <>
          <div className="container">
            <PostSummary viewNum={questions.views} />
            <div className="questions">
              <div
                className="question-title"
                onClick={() => {
                  detailQuestionView(questions.questionId);
                }}
              >
                {questions.title}
              </div>
              <div className="question-content"> {questions.content} </div>
              <UserInfo>
                <div className="user-container">
                  <div>tags</div>
                  <div>
                    <AiOutlineUser className="user-icon" />
                    {questions.author.displayName} 1hours ago
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

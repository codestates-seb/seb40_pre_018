import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Vote } from './Vote';
import { UserInfo } from './UserInfo';
import { getTimeElapsed } from '../utils/timeElapsed';
import { ContentViewer } from './ContentViewer';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Tags } from './Tags';

const ContentWrapper = styled.section`
  display: flex;
  align-items: flex-start;

  .main-content {
    width: 100%;

    .text {
      margin: 0;
      font-size: 15px;
      line-height: 22.5px;
      padding-top: 4px;
    }
  }
`;

// 질문 내용 아래 공유, 수정, 삭제 옵션 ~ 작성자 정보 스타일링
const Utils = styled.div`
  display: flex;
  color: red;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16px 0;
  padding-top: 4px;

  .modified-date {
    font-size: 12px;
    color: var(--blue-600);
    padding-top: 7px;
  }
`;

// 공유, 수정, 삭제 옵션들 스타일링
const Options = styled.div`
  display: flex;
  color: var(--black-500);
  font-size: 13px;
  margin: -4px;

  button {
    height: 17px;
    margin-top: 2px;
    padding-top: 7px;
    color: var(--black-500);
    font-size: 13px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Content = ({
  type,
  author,
  content,
  votes,
  isUpVoter,
  isDownVoter,
  createdAt,
  updatedAt,
  id,
  questionData,
  updateData,
  // tags,
}) => {
  const { user } = useSelector((state) => state.loginReducer);
  // console.log(user.token);
  const params = useParams();

  const navigate = useNavigate();
  const handleEdit = () => {
    type === 'question'
      ? navigate(`/edit/${params.id}`)
      : console.log('질문 수정');
    // 답변 수정 - 중요도 중간이므로 추후 추가(일단 console.log('질문 수정'))
  };

  const handleDelete = () => {
    axios(`http://15.165.244.155:8080/${type}s/${id}`, {
      method: 'delete',
      headers: {
        Authorization: user.token,
      },
    })
      .then(() => {
        if (type === 'question') {
          location.href = '/';
        } else if (type === 'answer') {
          updateData({
            ...questionData,
            answers: questionData.answers.filter((el) => el.answerId !== id),
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <ContentWrapper className={type + '-container'}>
      <Vote
        type={type}
        id={id}
        votes={votes}
        isUpVoter={isUpVoter}
        isDownVoter={isDownVoter}
        questionData={questionData}
        updateData={updateData}
      />
      <div className="main-content">
        <ContentViewer content={content} />
        {/* {type === 'question' && tags && <Tags tags={tags} />} */}
        <Utils>
          <Options>
            <button>Share</button>
            <button onClick={() => handleEdit()}>Edit</button>
            {user.userId === author.userId && (
              <button onClick={() => handleDelete()}>Delete</button>
            )}
          </Options>
          {updatedAt && (
            <span className="modified-date">
              edited {getTimeElapsed(updatedAt)}
            </span>
          )}
          <UserInfo type={type} createdAt={createdAt} author={author} />
        </Utils>
      </div>
    </ContentWrapper>
  );
};

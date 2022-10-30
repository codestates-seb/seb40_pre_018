import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Vote } from './Vote';
import { UserInfo } from './UserInfo';
import { getTimeElapsed } from '../utils/timeElapsed';
import { fetchDelete } from '../utils/api';
// import { Tags } from './Tags';

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .main-content {
    width: 100%;

    .text {
      margin: 0;
      font-size: 15px;
      line-height: 22.5px;
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
  createdAt,
  updatedAt,
  // tags,
}) => {
  const params = useParams();

  const navigate = useNavigate();
  const handleEditQuestion = () => {
    navigate(`/edit/${params.id}`);
  };

  const handleDelete = () => {
    fetchDelete(`http:///15.165.244.155:8080/questions/${params.id}`);
    navigate('/');
  };

  return (
    <ContentWrapper className={type + '-container'}>
      <Vote votes={votes} />
      <div className="main-content">
        <p className="text">{content}</p>
        {/* {type === 'question' && tags && <Tags tags={tags} />} */}
        <Utils>
          <Options>
            <button>Share</button>
            <button onClick={() => handleEditQuestion()}>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
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

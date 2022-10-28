import styled from 'styled-components';
import { Vote } from './Vote';
import { UserInfo } from './UserInfo';
import { Tags } from './Tags';
import { getTimeElapsed } from '../utils/timeElapsed';

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .main-content {
    .question {
      margin: 0;
      font-size: 15px;
      line-height: 22.5px;
    }
  }
`;

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

export const Content = ({
  type,
  votes,
  description,
  tags,
  modified,
  asked,
  userAvatar,
  userName,
  userId,
  userReputation,
  userBadge,
}) => {
  return (
    <ContentWrapper>
      <Vote votes={votes} />
      <div className="main-content">
        <p className="question">{description}</p>
        <Tags tags={tags} />
        <Utils>
          {type == 'question' && (
            <Options>
              <div>Share</div>
              <div>Edit</div>
              <div>Delete</div>
            </Options>
          )}
          {modified && (
            <span className="modified-date">
              edited {getTimeElapsed(modified)}
            </span>
          )}
          <UserInfo
            asked={asked}
            userAvatar={userAvatar}
            userName={userName}
            userId={userId}
            userReputation={userReputation}
            userBadge={userBadge}
          />
        </Utils>
      </div>
    </ContentWrapper>
  );
};

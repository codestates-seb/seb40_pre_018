import styled from 'styled-components';
import sprites from '../assets/images/sprites.svg';
import { getTimeElapsed } from '../utils/timeElapsed';
import { AiOutlineUser } from 'react-icons/ai';

const UserInfoContainer = styled.section`
  width: 200px;
  padding: 7px 6px 7px 7px;
  border-radius: 3px;
  background-color: ${(props) => props.bgColor};
  color: var(--black-500);
  font-size: 12px;

  .asked-time {
    margin-bottom: 4px;
  }

  .avatar-wrapper {
    float: left;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 4px;

    svg {
      width: 32px;
      height: 32px;
      border-radius: 3px;
    }
  }

  .user-detail {
    float: left;
    margin-left: 8px;

    a {
      font-size: 13px;
      color: var(--blue-600);
    }

    /* .user-scores {
      display: flex;
      margin-top: 2px;

      .reputation {
        font-weight: bold;
        margin-right: 2px;
      }

      .badge {
        background-image: url(${sprites});
        display: inline-block;
        margin-right: 3px;
        margin-left: 2px;
        vertical-align: text-bottom;
        width: 6px;
        height: 14px;
      }

      .gold {
        background-position: -102px -398px;
      }

      .silver {
        background-position: -82px -398px;
      }

      .bronze {
        background-position: -62px -398px;
      }

      .badge-count {
        margin-right: 3px;
        margin-left: 2px;
      }
    } */
  }
`;

export const UserInfo = ({ type, createdAt, author }) => {
  return (
    <UserInfoContainer
      bgColor={type === 'question' ? 'rgb(217, 234, 247)' : 'transparent'}
    >
      <div className="asked-time">
        <span>
          {type === 'question' ? 'asked ' : 'answered '}
          {getTimeElapsed(createdAt)}
        </span>
      </div>
      <div className="avatar-wrapper">
        <AiOutlineUser size="32px" />
      </div>
      <div className="user-detail">
        <a
          href={'https://stackoverflow.com/users/' + author.userId}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author.displayName}
        </a>
        {/* 아래는 유저 프로필 중 reputation 과 뱃지 관련 부분입니다. (우선순위가 낮아 일단 주석 처리 했습니다! - 추후 사용시 수정해서 사용) */}
        {/* <ul className="user-scores">
          <li>
            <span className="reputation">{userReputation}</span>
          </li>
          {userBadge &&
            Object.keys(userBadge).map((badgeColor) => {
              return (
                <li key={badgeColor}>
                  <span className={badgeColor + ' badge'}></span>
                  <span className="badge-count">{userBadge[badgeColor]}</span>
                </li>
              );
            })}
        </ul> */}
      </div>
    </UserInfoContainer>
  );
};

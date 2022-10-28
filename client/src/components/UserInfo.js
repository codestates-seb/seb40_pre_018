import styled from 'styled-components';
import sprites from '../assets/images/sprites.svg';
import { getTimeElapsed } from '../utils/timeElapsed';

const UserInfoContainer = styled.section`
  width: 200px;
  padding: 7px 6px 7px 7px;
  border-radius: 3px;
  background-color: rgb(217, 234, 247);
  color: var(--black-500);
  font-size: 12px;

  .asked-time {
    margin-bottom: 4px;
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

    a {
      font-size: 13px;
      color: var(--blue-600);
    }

    .user-scores {
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
    }
  }
`;

export const UserInfo = ({
  asked,
  userAvatar,
  userName,
  userId,
  userReputation,
  userBadge,
}) => {
  return (
    <UserInfoContainer>
      <div className="asked-time">
        <span>asked {getTimeElapsed(asked)}</span>
      </div>
      <div className="avatar-wrapper">
        <img src={userAvatar} alt={userName + "'s avatar"} />
      </div>
      <div className="user-detail">
        <a href={'https://stackoverflow.com/questions/7' + userId}>
          {userName}
        </a>
        <ul className="user-scores">
          <li>
            <span className="reputation">{userReputation}</span>
          </li>
          {Object.keys(userBadge).map((badgeColor) => {
            return (
              <li key={badgeColor}>
                <span className={badgeColor + ' badge'}></span>
                <span className="badge-count">{userBadge[badgeColor]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </UserInfoContainer>
  );
};

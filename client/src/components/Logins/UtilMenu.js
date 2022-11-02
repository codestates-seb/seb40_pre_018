import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { ReactComponent as InboxIcon } from '../../assets/images/inbox-icon.svg';
import { ReactComponent as AchieveIcon } from '../../assets/images/achieve-icon.svg';
import { ReactComponent as HelpIcon } from '../../assets/images/help-icon.svg';
import { ReactComponent as SwitcherIcon } from '../../assets/images/switcher-icon.svg';

const UtileMenuContainer = styled.div`
  display: flex;
  height: 100%;
  .util-menu-container {
    display: flex;
    padding-right: 12px;
    li {
      display: flex;
      align-items: center;
      margin: 0 10px;
      cursor: pointer;

      svg {
        fill: var(--black-600);
      }
    }

    .profile {
      margin: 0 12px;
      .avatar {
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 3px;
        background: var(--black-075);
      }

      .reputation {
        font-size: 12px;
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
`;

const UtilMenu = () => {
  return (
    <UtileMenuContainer>
      <ul className="util-menu-container">
        <li className="profile">
          <AiOutlineUser className="avatar" />
          <span className="reputation">1</span>
        </li>
        <li>
          <InboxIcon />
        </li>
        <li>
          <AchieveIcon />
        </li>
        <li>
          <HelpIcon />
        </li>
        <li>
          <SwitcherIcon />
        </li>
      </ul>
    </UtileMenuContainer>
  );
};

export default UtilMenu;

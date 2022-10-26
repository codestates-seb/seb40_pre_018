import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as QuestionIcon } from '../assets/images/question.svg';

const NavContainer = styled.nav`
  width: 100%;

  .nav-container {
    width: 100%;
    > li {
      padding: 4px 4px 4px 30px;

      &:first-child {
        padding: 0;
        margin: 16px 0 4px 8px;
        color: var(--fc-light);
        font-size: 11px;
      }

      > a {
        display: flex;
        align-items: center;
        padding: 8px 6px 8px 8px;
        color: var(--black-600);
        font-size: 13px;

        #question-icon {
          margin: 0 5px;
        }
      }
    }

    .sidemenu-question {
      padding: 0;
    }

    .clicked {
      background: var(--black-050);
      font-weight: bold;
      color: var(--black-900);
      border-right: 3px solid rgb(244, 130, 37);
    }
  }
`;
const Nav = () => {
  return (
    <NavContainer>
      <ul className="nav-container">
        <li>PUBLIC</li>
        <li className="sidemenu-question clicked">
          <Link to="/">
            <QuestionIcon id="question-icon" />
            <span>Question</span>
          </Link>
        </li>
        <li>
          <Link to="/tags">
            <span>Tags</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;

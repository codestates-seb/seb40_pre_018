import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginBtn, SignupBtn } from './Buttons';
import Search from './Search';
import sprites from '../assets/images/sprites.svg';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  height: 50px;
  border-top: 3px solid var(--orange-400);
  background-color: var(--black-025);
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 0 0 5px;
    padding: 0 8px;

    .logo-img {
      display: block;
      width: 150px;
      height: 30px;
      background: url(${sprites}) 0 -500px no-repeat;
    }
  }

  .gnb {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    color: var(--black-600);
    font-size: 13px;
    margin: 3px 0 0 0;

    li {
      margin: 0 15px;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <HeaderContainer>
      <div className="header-container">
        <h1 className="logo">
          <Link to="/">
            <span className="logo-img hide">Stack Overflow</span>
          </Link>
        </h1>
        <ul className="gnb">
          <li>About</li>
          <li>Products</li>
          <li>For Teams</li>
        </ul>
        <Search />
        <div className="button-container">
          <LoginBtn onClick={handleLogin}>Log in</LoginBtn>
          <SignupBtn onClick={handleSignup}>Sign up</SignupBtn>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

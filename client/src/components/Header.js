import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CommonButton } from './Buttons';
import Search from './Search';
import sprites from '../assets/images/sprites.svg';
import { useSelector } from 'react-redux';
import UtilMenu from './Logins/UtilMenu';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  height: 50px;
  border-top: 3px solid var(--orange-400);
  background-color: var(--black-025);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .header-container {
    width: 1264px;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 100%;
      margin: 0;
      padding: 0 8px;
      display: flex;
      align-items: center;

      .logo-img {
        display: block;
        width: 150px;
        height: 30px;
        margin-top: -4px;
        background: url(${sprites}) 0 -500px no-repeat;
      }
    }

    .gnb {
      display: flex;
      align-items: center;
      padding: 2px 0;
      margin: -2px;
      color: var(--black-600);
      font-size: 13px;

      li {
        padding: 6px 12px;
        margin: 2px;
      }
    }

    .button-container {
      display: flex;
    }

    .button-container button {
      padding: 8px 10px;
    }
  }
`;

const Header = () => {
  const { token } = useSelector((state) => state.loginReducer);

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
        {!token ? (
          <ul className="gnb">
            <li>About</li>
            <li>Products</li>
            <li>For Teams</li>
          </ul>
        ) : (
          <ul className="gnb">
            <li>Products</li>
          </ul>
        )}
        <Search />
        {!token ? (
          <div className="button-container">
            <CommonButton onClick={handleLogin} border="var(--powder-500)">
              Log in
            </CommonButton>
            <CommonButton
              bgColor="var(--blue-500)"
              color="#fff"
              border="transparent"
              onClick={handleSignup}
            >
              Sign up
            </CommonButton>
          </div>
        ) : (
          <UtilMenu />
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;

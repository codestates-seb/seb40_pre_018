import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LoginLogo } from '../assets/images/loginlogo.svg';
import BasicLogin from '../components/Logins/BasicLogin';
import SocialLogin from '../components/Logins/SocialLogin';

const Login = () => {
  const LoginPage = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    background-color: var(--black-050);

    .login-container {
      width: 100%;
      max-width: 1264px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .signup-link {
        width: 100%;
        max-width: 288px;
        padding: 24px 0;
        margin-bottom: 24px;
        font-size: 13px;
        text-align: center;
        > a {
          margin-left: 5px;
          color: var(--blue-600);
        }
      }
    }
  `;
  return (
    <LoginPage>
      <div className="login-container">
        <div className="login-logo">
          <Link to="/">
            <LoginLogo />
          </Link>
        </div>
        <SocialLogin />
        <BasicLogin />
        <div className="signup-link">
          {`Don't have an account?`}
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </LoginPage>
  );
};

export default Login;

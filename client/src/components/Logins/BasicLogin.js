import { useState } from 'react';
import styled from 'styled-components';
import { fetchCreate } from '../../utils/api';
import { CommonButton } from '../Buttons';
import { Input } from '../InputStyles';

const BasicContainer = styled.div`
  width: 100%;
  max-width: 288px;
  padding: 24px;
  margin-bottom: 24px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 288px;

    label {
      font-size: 15px;
      font-weight: bold;
    }

    button {
      margin: 0;
    }
  }

  .login-email {
    margin-bottom: 10px;
  }

  .login-password {
    margin-bottom: 20px;
  }
`;

const BasicLogin = () => {
  // 유효성 검사 필요함
  const [loginEmail, loginEmailSet] = useState(null);
  const [loginPassword, loginPasswordSet] = useState(null);

  const handeLogin = (email, password) => {
    // 추후 api와 url 변경이 필요함
    fetchCreate('url', { email, password });
  };

  return (
    <BasicContainer className="basic-container">
      <div className="login-email">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={loginEmail}
          onChange={(event) => loginEmailSet(event.target.value)}
        />
      </div>
      <div className="login-password">
        <label htmlFor="email">Password</label>
        <Input
          id="password"
          type="password"
          value={loginPassword}
          onChange={(event) => loginPasswordSet(event.target.value)}
        />
      </div>
      <div>
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          onClick={() => handeLogin(loginEmail, loginPassword)}
        >
          Log in
        </CommonButton>
      </div>
    </BasicContainer>
  );
};

export default BasicLogin;

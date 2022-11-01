import { useState } from 'react';
import styled from 'styled-components';
import { fetchLogin } from '../../utils/api';
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

    p {
      margin: 2px;
      padding: 2px;
      color: #d0390e;
      font-size: 12px;
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
  const initialInfo = { email: '', password: '' };
  const [loginInfo, loginInfoSet] = useState(initialInfo);
  const [emptyEmail, emptyEmailSet] = useState(false);
  const [emptyPassword, emptyPasswordSet] = useState(false);
  const [invalidEmail, invalidEmailSet] = useState(false);
  const [loginFailed, loginFailedSet] = useState(false);

  const handeLogin = (email, password) => {
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 비어있으면 empty메세지 출력
    if (email === '') emptyEmailSet(true);
    // 유효하지않으면 invalid 메세지 출력
    else if (!emailRegex.test(email)) {
      emptyEmailSet(false);
      invalidEmailSet(true);
    }

    // 비어있으면 empty메세지 출력
    if (password === '') emptyPasswordSet(true);

    // 모두 비어있지 않으면서 유효한 이메일이면 로그인 요청
    if (emailRegex.test(email) && password !== '') {
      emptyEmailSet(false);
      emptyPasswordSet(false);
      invalidEmailSet(false);

      /* 아래 요청 코드는 추후 url과 응답 형태에 따라 수정될 수 있습니다.*/
      // fetchLogin 실행시 반환값이 없을 경우 실패 메세지 출력
      !fetchLogin('http://localhost:3001/login', { email, password })
        ? loginFailedSet(true)
        : // 로그인 성공시 로그인상태 변경 로직을 추가해야합니다.
          loginFailedSet(false);
    }
  };

  return (
    <BasicContainer className="basic-container">
      <div className="login-email">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={loginInfo.email}
          onChange={(event) =>
            loginInfoSet({ ...loginInfo, email: event.target.value })
          }
          border={emptyEmail || loginFailed ? '#d0390e' : null}
          focusBorder={emptyEmail || loginFailed ? '#d0390e' : null}
          shadow={emptyEmail || loginFailed ? 'rgb(246,224,224)' : null}
        />
        {emptyEmail ? <p>Email cannot be empty.</p> : null}
        {invalidEmail ? <p>The email is not a valid email address.</p> : null}
        {loginFailed ? <p>The email or password is incorrect.</p> : null}
      </div>
      <div className="login-password">
        <label htmlFor="email">Password</label>
        <Input
          id="password"
          type="password"
          value={loginInfo.password}
          onChange={(event) =>
            loginInfoSet({ ...loginInfo, password: event.target.value })
          }
          border={emptyEmail || loginFailed ? '#d0390e' : null}
          focusBorder={emptyEmail || loginFailed ? '#d0390e' : null}
          shadow={emptyEmail || loginFailed ? 'rgb(246,224,224)' : null}
        />
        {emptyPassword ? <p>Password cannot be empty.</p> : null}
        {loginFailed ? <p>The email or password is incorrect.</p> : null}
      </div>
      <div>
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          onClick={() => handeLogin(loginInfo.email, loginInfo.password)}
        >
          Log in
        </CommonButton>
      </div>
    </BasicContainer>
  );
};

export default BasicLogin;

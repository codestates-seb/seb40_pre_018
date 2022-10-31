/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CommonButton } from '../components/Buttons';

// 회원가입 페이지 컨테이너
const SinUpPage = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-025);

  .signup-left-container {
    margin-right: 40px;

    > h1 {
      font-weight: 400;
      color: var(--black-800);
    }

    li {
      margin-bottom: 24px;
      font-size: 15px;
      color: var(--black-800);
    }

    .signup-term {
      font-size: small;
      > div {
        margin-bottom: 5px;
        color: var(--black-500);
      }
      a {
        color: var(--blue-600);
      }
    }
  }
  /* signUp 전체 박스 */
  .signup-right-contianer {
    width: 310px;
  }
  /* 소셜가입 버튼 박스 */
  .social-btn-container {
    display: flex;
    flex-direction: column;
  }
  .signup-footer {
    text-align: center;
    font-size: 13px;
    color: var(--black-700);
    margin-top: 40px;
    a {
      margin-left: 6px;
      color: var(--blue-600);
    }
  }
`;
// 회원가입 폼 제출 전체 박스
const SignUpFormContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  div {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }
  .isvalid {
    font-size: 13px;
    font-weight: 400;
    color: red;
    margin-bottom: 10px;
  }
  .password-limit {
    font-size: small;
    font-weight: 400;
    color: var(--black-500);
    margin: 0px 0px 20px 3px;
  }
  .signup-policy {
    font-size: small;
    color: var(--black-500);
    margin: 30px 3px 10px 3px;
    a {
      color: var(--blue-600);
    }
  }
`;

const SignUpInputForm = styled.input`
  width: auto;
  height: 16px;
  padding: 1.2em;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid var(--black-100);
`;

const SignUp = () => {
  // 이름,이메일,비밀번호 전송
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // 유효성 검사
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);

  // 회원가입 완료 후 로그인 페이지로 이동
  const navigate = useNavigate();

  // DisplayName 유효성 검사 체크
  const validationNameCheck = (nameVal) => {
    if (nameVal.length >= 1) {
      return true;
    } else {
      return false;
    }
  };

  // email 유효성 검사 체크
  const validationEmailCheck = (emailVal) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(emailVal);
  };

  // Password 유효성 검사 체크
  const validationPasswordCheck = (passwordVal) => {
    // 비밀번호 특수문자 검사를 위한 정규식 표현
    const specialLetter = passwordVal.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    // 특수문자 1자 이상, 전체 8자 이상일 것
    const isValidPassword = passwordVal.length >= 8 && specialLetter >= 1;
    if (isValidPassword) {
      return true;
    } else {
      return false;
    }
  };

  // 이름
  const onNameHandler = (e) => {
    let targetValue = e.currentTarget.value;
    setDisplayName(targetValue);

    if (validationNameCheck(targetValue)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  // 이메일
  const onEmailHandler = (e) => {
    let targetValue = e.currentTarget.value;
    setEmail(targetValue);
    if (validationEmailCheck(targetValue)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  // 패스워드
  const onPasswordHandler = (e) => {
    let targetValue = e.currentTarget.value;
    setPassword(targetValue);
    if (validationPasswordCheck(targetValue)) {
      setisValidPassword(false);
    } else {
      setisValidPassword(true);
    }
  };

  // 회원가입 데이터 전송
  const signUpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios
        .post(`http://15.165.244.155:8080/users/`, {
          email,
          displayName,
          password,
        })
        .then((res) =>
          console.log('회원가입 완료 : ' + JSON.stringify(res.data))
        )
        .then(() => navigate('/login'));
    } catch (e) {
      window.alert('일시적인 오류가 발생했습니다.');
    }
  };

  // 회원가입 기능 구현
  const onSignupHandler = (e) => {
    e.preventDefault();
    let validationName = validationNameCheck(displayName);
    let validationEmail = validationEmailCheck(email);
    let validationPassword = validationPasswordCheck(password);
    if (validationName && validationEmail && validationPassword) {
      signUpSubmit();
    } else {
      setIsValidName(!validationName);
      setIsValidEmail(!validationEmail);
      setisValidPassword(!validationPassword);
      return;
    }
  };

  return (
    <SinUpPage>
      {/* 좌측 컨테이너 */}
      <div className="signup-left-container">
        <h1>Join the Stack Overflow community</h1>
        <ul>
          <li>Get unstuck — ask a question</li>
          <li>Unlock new privileges like voting and commenting</li>
          <li>Save your favorite tags, filters, and jobs</li>
          <li>Earn reputation and badges</li>
        </ul>
        <div className="signup-term">
          <div>
            Collaborate and share knowledge with a private group for FREE.
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
          >
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </div>
      </div>
      {/* 우측 컨테이너 */}
      <form className="signup-right-contianer">
        {/* 소셜 회원가입 미정
        <div className="social-btn-container">
          <CommonButton>Sign up with google</CommonButton>
          <CommonButton>Sign up with GitHub</CommonButton>
          <CommonButton onClick={signUpSubmit}>
            Sign up with Facebook
          </CommonButton>
        </div> */}
        <SignUpFormContainer>
          <div>
            Display name
            <SignUpInputForm
              value={displayName}
              onChange={onNameHandler}
            ></SignUpInputForm>
            {isValidName && (
              <div className="isvalid">Please enter a valid Display name.</div>
            )}
          </div>
          <div>
            Email
            <SignUpInputForm
              value={email}
              onChange={onEmailHandler}
            ></SignUpInputForm>
            {isValidEmail && (
              <div className="isvalid">Please enter a valid email address.</div>
            )}
          </div>
          <div className="password-box">
            Password
            <SignUpInputForm
              value={password}
              type="password"
              onChange={onPasswordHandler}
            ></SignUpInputForm>
            <div className="password-limit">
              {isValidPassword && (
                <div className="isvalid">Please enter a valid Password.</div>
              )}
              Passwords must contain at least eight characters, including at
              least 1 special letter and 1 number.
            </div>
          </div>
          {/* Please enter a valid email address. */}

          {/* CAPTHA 부분
          <div>
            <p>Im not a robot</p>
          </div> */}
          <div></div>
          <CommonButton
            bgColor="var(--blue-500)"
            color="#fff"
            border="transparent"
            onClick={onSignupHandler}
          >
            Sign up
          </CommonButton>
          <span className="signup-policy">
            By clicking “Sign up”, you agree to our &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/legal/terms-of-service/public"
            >
              terms of service, &nbsp;
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/legal/privacy-policy"
            >
              privacy policy
            </a>
            &nbsp; and
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/legal/cookie-policy"
            >
              &nbsp; cookie policy
            </a>
          </span>
        </SignUpFormContainer>
        <div className="signup-footer">
          <div>
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
          <div>
            Are you an employer?
            <a
              target="_blank"
              rel="noreferrer"
              href="https://talent.stackoverflow.com/users/login"
            >
              Sign up on Talent
            </a>
          </div>
        </div>
      </form>
    </SinUpPage>
  );
};

export default SignUp;

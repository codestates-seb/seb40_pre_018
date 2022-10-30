/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { CommonButton } from '../components/Buttons';

const SinUpPage = styled.section`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  background-color: var(--black-025);

  .signup-block {
  }
  .social-btn-container {
    display: flex;
    flex-direction: column;
  }
`;

const SignUpFormContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 300px;
  }
`;

const SignUpInputForm = styled.input``;

const SignUp = () => {
  return (
    <SinUpPage>
      <div className="signup-guide-container">
        <h1>Join the Stack Overflow community</h1>
        <div>
          <div>Get unstuck — ask a question</div>
          <div>Unlock new privileges like voting and commenting</div>
          <div>Save your favorite tags, filters, and jobs</div>
          <div>Earn reputation and badges</div>
        </div>
        <div>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <a
            target="_blank"
            href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up"
            rel="noreferrer"
          >
            Get Stack Overflow for Teams free for up to 50 users.
          </a>
        </div>
      </div>
      <form className="signup-block">
        <div className="social-btn-container">
          <CommonButton>Sign up with google</CommonButton>
          <CommonButton>Sign up with GitHub</CommonButton>
          <CommonButton>Sign up with Facebook</CommonButton>
        </div>
        <SignUpFormContainer>
          <div>
            Display name
            <SignUpInputForm></SignUpInputForm>
          </div>
          <div>
            Email
            <SignUpInputForm></SignUpInputForm>
          </div>
          <div className="password-box">
            Password
            <SignUpInputForm></SignUpInputForm>
            <div>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </div>
          </div>
          {/* CAPTHA 부분
          <div>
            <p>Im not a robot</p>
          </div> */}
          <div></div>
          <CommonButton
            bgColor="var(--blue-500)"
            color="#fff"
            border="transparent"
          >
            Sign up
          </CommonButton>
        </SignUpFormContainer>
      </form>
    </SinUpPage>
  );
};

export default SignUp;

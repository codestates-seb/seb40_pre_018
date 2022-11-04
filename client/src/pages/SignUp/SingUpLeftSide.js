import styled from 'styled-components';

const SignUpLeftPage = styled.div`
  margin-right: 40px;

  > h1 {
    font-weight: 400;
    color: var(--black-800);
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    font-size: 15px;
    color: var(--black-800);
    > img {
      margin-right: 5px;
    }
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
`;
const SingUpLeftSide = () => {
  return (
    <SignUpLeftPage>
      {/* <div className="signup-left-container"> */}
      <h1>Join the Stack Overflow community</h1>
      <ul>
        <li>
          <img
            width="24"
            alt="스크린샷 2022-09-03 오후 8 49 23"
            src="https://user-images.githubusercontent.com/104320234/188269169-bf7b987f-e597-46cd-a8e7-c227efde5679.png"
          />
          Get unstuck — ask a question
        </li>
        <li>
          <img
            width="24"
            alt="스크린샷 2022-09-03 오후 8 49 56"
            src="https://user-images.githubusercontent.com/104320234/188269240-b38cf6ed-34c3-43eb-b63c-51d9619ade19.png"
          />
          Unlock new privileges like voting and commenting
        </li>
        <li>
          <img
            width="27"
            alt="스크린샷 2022-09-03 오후 8 50 14"
            src="https://user-images.githubusercontent.com/104320234/188269297-ff59ed55-4627-49f3-a001-9e480ff2bc7d.png"
          />
          Save your favorite tags, filters, and jobs
        </li>
        <li>
          <img
            width="23"
            alt="스크린샷 2022-09-03 오후 8 50 42"
            src="https://user-images.githubusercontent.com/104320234/188269328-d049a0e0-6514-4ea6-b207-d5f58d02e943.png"
          />
          Earn reputation and badges
        </li>
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
      {/* </div> */}
    </SignUpLeftPage>
  );
};

export default SingUpLeftSide;

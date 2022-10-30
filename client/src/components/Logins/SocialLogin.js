import styled from 'styled-components';
import { SocialButton } from '../Buttons';
import { ReactComponent as GoogleLogo } from '../../assets/images/google-logo.svg';
import { ReactComponent as GitHubLogo } from '../../assets/images/github-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/facebook-logo.svg';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 288px;
  margin: 24px 0 16px;

  .github-svg path,
  .facebook-svg path {
    fill: #fff;
  }
`;

const SocialLogin = () => {
  return (
    <SocialContainer className="social-container">
      <SocialButton>
        <GoogleLogo />
        Log in with Google
      </SocialButton>
      <SocialButton bgColor="var(--black-750)" color="#fff">
        <GitHubLogo className="github-svg" />
        Log in with GitHub
      </SocialButton>
      <SocialButton bgColor="#385499" color="#fff">
        <FacebookLogo className="facebook-svg" />
        Log in with Facebook
      </SocialButton>
    </SocialContainer>
  );
};

export default SocialLogin;

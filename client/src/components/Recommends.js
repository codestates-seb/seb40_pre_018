import styled from 'styled-components';
import { ReactComponent as Pencile } from '../assets/images/pencile.svg';

const RecommendBox = styled.div`
  width: 100%;
  margin: 8px;
  border: 1px solid var(--black-075);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background: #fff;

  > div:first-child {
    padding: 12px;
    background-color: var(--black-025);
    font-size: 15px;
    border-bottom: 1px solid var(--black-100);
  }

  > div:last-child {
    display: flex;
    margin: 16px;

    > div:first-child {
      margin: 0 8px;
    }

    > div:last-child {
      margin: 0 8px;

      > p {
        font-size: 12px;

        &:first-child {
          margin-bottom: 12px;
        }
      }
    }
  }
`;

export const RecommendTitle = () => {
  return (
    <RecommendBox>
      <div>Writing a good title</div>
      <div>
        <div>
          <Pencile />
        </div>
        <div>
          <p>Your title should summarize the problem.</p>
          <p>
            You might find that you have a better idea of your title after
            writing out the rest of the question.
          </p>
        </div>
      </div>
    </RecommendBox>
  );
};

export const RecommendBody = () => {
  return (
    <RecommendBox>
      <div>Introduce the problem</div>
      <div>
        <div>
          <Pencile />
        </div>
        <div>
          <p>
            Explain how you encountered the problem you’re trying to solve, and
            any difficulties that have prevented you from solving it yourself.
          </p>
        </div>
      </div>
    </RecommendBox>
  );
};

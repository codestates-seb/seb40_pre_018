import styled from 'styled-components';
import { ReactComponent as VoteUpIcon } from '../assets/images/voteUp.svg';
import { ReactComponent as VoteDownIcon } from '../assets/images/voteDown.svg';

const VoteContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  div {
    text-align: center;
    font-size: 21px;
    color: var(--black-500);
    font-weight: 400;
  }

  .voting-button {
    height: 36px;
    width: 36px;
    margin: 2px;
    display: flex;
    padding: 0;
    background: none;
    border: none;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Vote = ({ votes }) => {
  return (
    <VoteContainer>
      <button className="voting-button">
        <VoteUpIcon fill="var(--black-200)" />
      </button>
      <div>{votes}</div>
      <button className="voting-button">
        <VoteDownIcon fill="var(--black-200)" />
      </button>
    </VoteContainer>
  );
};

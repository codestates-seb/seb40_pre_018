import styled from 'styled-components';
import { ReactComponent as VoteUpIcon } from '../assets/images/voteUp.svg';
import { ReactComponent as VoteDownIcon } from '../assets/images/voteDown.svg';
import { fetchCreate } from '../utils/api';

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

// eslint-disable-next-line no-unused-vars
export const Vote = ({ type, id, votes, upVoter, downVoter, reRender }) => {
  const onUpVote = () => {
    const url = `http://15.165.244.155:8080/${type}s/${id}/upvotes`;
    fetchCreate(url);
    reRender();
  };

  const onDownVote = () => {
    const url = `http://15.165.244.155:8080/${type}s/${id}/downvotes`;
    fetchCreate(url);
    reRender();
  };
  return (
    <VoteContainer>
      <button className="voting-button" onClick={onUpVote}>
        <VoteUpIcon fill={upVoter ? 'var(--orange-400)' : 'var(--black-200)'} />
      </button>
      <div>{votes}</div>
      <button className="voting-button" onClick={onDownVote}>
        <VoteDownIcon
          fill={downVoter ? 'var(--orange-400)' : 'var(--black-200)'}
        />
      </button>
    </VoteContainer>
  );
};

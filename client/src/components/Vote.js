import styled from 'styled-components';
import axios from 'axios';
import { ReactComponent as VoteUpIcon } from '../assets/images/voteUp.svg';
import { ReactComponent as VoteDownIcon } from '../assets/images/voteDown.svg';
import { useSelector } from 'react-redux';

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
      transition: fill 0.1s ease-in-out;
    }
  }
`;

export const Vote = ({
  type,
  id,
  votes,
  isUpVoter,
  isDownVoter,
  questionData,
  updateData,
}) => {
  const { user } = useSelector((state) => state.loginReducer);

  const fetchVote = async (url) => {
    axios(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user?.token,
      },
    })
      .then((res) => {
        updateData(
          type === 'question'
            ? {
                ...questionData,
                voteCount: res.data.voteCount,
                isUpVoter: res.data.isUpVoter,
                isDownVoter: res.data.isDownVoter,
              }
            : {
                ...questionData,
                answers: questionData.answers.map((el) => {
                  if (el.answerId === id) {
                    el = {
                      ...el,
                      voteCount: res.data.voteCount,
                      isUpVoter: res.data.isUpVoter,
                      isDownVoter: res.data.isDownVoter,
                    };
                  }
                  return el;
                }),
              }
        );
      })
      .catch((err) => console.error('Error', err.message));
  };

  const onUpVote = () => {
    const url = `http://15.165.244.155:8080/${type}s/${id}/upvotes`;
    fetchVote(url);
  };

  const onDownVote = () => {
    const url = `http://15.165.244.155:8080/${type}s/${id}/downvotes`;
    fetchVote(url);
  };

  return (
    <VoteContainer>
      <button className="voting-button" onClick={onUpVote}>
        <VoteUpIcon
          fill={isUpVoter ? 'var(--orange-400)' : 'var(--black-200)'}
        />
      </button>
      <div>{votes}</div>
      <button className="voting-button" onClick={onDownVote}>
        <VoteDownIcon
          fill={isDownVoter ? 'var(--orange-400)' : 'var(--black-200)'}
        />
      </button>
    </VoteContainer>
  );
};

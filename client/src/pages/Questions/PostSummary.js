import styled from 'styled-components';

export const PostSum = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 170px;
  padding: 23px;
  margin-bottom: 4px;
  text-align: left;
  font-size: 13px;

  span {
    padding: 2px;
    font-weight: 600;
  }

  .post-votes {
    color: var(--black-700);
  }
  .post-answers {
    color: var(--black-400);
  }
  .post-views {
    color: var(--black-400);
  }
`;

const PostSummary = ({ voteNum, answerNum, viewNum }) => {
  return (
    <PostSum>
      <span className="post-votes">{voteNum} votes</span>
      <span className="post-answers">{answerNum} answers</span>
      <span className="post-views">{viewNum} views</span>
    </PostSum>
  );
};

export default PostSummary;

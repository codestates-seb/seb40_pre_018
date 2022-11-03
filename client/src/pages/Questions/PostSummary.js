import styled from 'styled-components';

export const PostSum = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  width: 140px;
  padding: 30px 20px 30px 30px;
  text-align: left;
  font-size: 13px;

  span {
    padding: 2px;
    font-weight: 500;
  }

  .post-votes {
    color: var(--fc-dark);
  }
  .post-answers {
    color: var(--fc-light);
  }
  .post-views {
    color: var(--yellow-900);
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

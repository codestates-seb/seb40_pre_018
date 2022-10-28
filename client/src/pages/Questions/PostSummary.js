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

const PostSummary = () => {
  return (
    <PostSum>
      <span className="post-votes">8 votes</span>
      <span className="post-answers">8 answers</span>
      <span className="post-views">8 views</span>
    </PostSum>
  );
};

export default PostSummary;

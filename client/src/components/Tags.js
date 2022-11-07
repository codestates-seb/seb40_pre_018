import styled from 'styled-components';

const TagsContainer = styled.ul`
  display: flex;
  margin-top: 24px;
  margin-bottom: 27px;

  li {
    margin-right: 4px;

    span {
      margin: 2px 2px 2px 0px;
      padding: 0.4em 0.5em;
      border-radius: 3px;
      font-size: 12px;
      color: var(--powder-700);
      background-color: var(--powder-100);
    }
  }
`;

export const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </TagsContainer>
  );
};

const Tag = ({ tag }) => {
  return (
    <>
      <li>
        <span>{tag}</span>
      </li>
    </>
  );
};

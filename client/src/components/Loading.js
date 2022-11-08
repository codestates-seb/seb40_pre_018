import styled from 'styled-components';

const LoadingImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px);
`;

const Loading = () => {
  return (
    <LoadingImg>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loading"
      />
    </LoadingImg>
  );
};

export default Loading;

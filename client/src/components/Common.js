import styled from 'styled-components';
import Nav from './Nav';

const CommonLayout = styled.main`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
`;

const LeftAside = styled.aside`
  position: sticky;
  top: 50px;
  height: 100%;
  width: 164px;
  padding-top: 24px;
  margin-bottom: 8px;
`;

const Common = () => {
  return (
    <CommonLayout>
      <LeftAside>
        <Nav />
      </LeftAside>
    </CommonLayout>
  );
};

export default Common;

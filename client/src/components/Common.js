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

const RightAside = styled.aside`
  width: 300px;
  display: block;
  margin-top: 30px;
  padding-right: 24px;

  ul {
    width: 100%;
    padding: 0;
    display: block;
    text-align: left;
    align-items: center;
    height: 374px;
    background-color: var(--yellow-050);
    border-radius: 3px;
    border: 1px solid var(--yellow-200);

    > li {
      width: 100%;
      padding: 0 15px;
      margin: 12px 0;
      font-size: 13px;
      list-style-type: disc;
      list-style-position: inside;
    }

    .widget-header {
      width: 100%;
      height: 41px;
      padding: 15px;
      font-weight: 700;
      font-size: 12px;
      background-color: var(--yellow-100);
      border: 1px solid var(--yellow-200);
      list-style-type: none;
      margin: 0;
    }
  }
`;

const Common = () => {
  return (
    <CommonLayout>
      <LeftAside>
        <Nav />
      </LeftAside>
      <RightAside>
        <ul>
          <li className="widget-header">The Overflow Blog</li>
          <li>
            A flight simulator for developers to practice real world challenges
            and...
          </li>
          <li>
            Goodbye Webpack, hello Turbopack! The big news from today’s Next.JS
            conference
          </li>
          <li className="widget-header">Featured on Meta</li>
          <li>The 2022 Community-a-thon has begun!</li>
          <li>Mobile app infrastructure being decommissioned</li>
          <li>Staging Ground Workflow: Canned Comments</li>
          <li>The Ask Wizard (2022) has graduated</li>
        </ul>
      </RightAside>
    </CommonLayout>
  );
};

export default Common;

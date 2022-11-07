import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
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
  min-width: 164px;
  padding-top: 24px;
  margin-bottom: 8px;
`;

const RightAside = styled.aside`
  height: 100%;
  display: block;
  margin-top: 30px;
  padding-right: 24px;

  ul {
    width: 300px;
    padding: 0;
    display: block;
    text-align: left;
    align-items: center;
    height: auto;
    background-color: var(--yellow-050);
    border-radius: 3px;
    border: 1px solid var(--yellow-200);
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);

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
      border-bottom: 1px solid var(--yellow-200);
      list-style-type: none;
      margin: 0;
    }

    .widget-header:nth-child(4) {
      border-top: 1px solid var(--yellow-200);
    }
  }
`;

const Common = () => {
  return (
    <>
      <CommonLayout>
        <LeftAside>
          <Nav />
        </LeftAside>

        <Outlet />

        <RightAside>
          <ul>
            <li className="widget-header">The Overflow Blog</li>
            <li>
              A flight simulator for developers to practice real world
              challenges and...
            </li>
            <li>
              Goodbye Webpack, hello Turbopack! The big news from today’s
              Next.JS conference
            </li>
            <li className="widget-header">Featured on Meta</li>
            <li>The 2022 Community-a-thon has begun!</li>
            <li>Mobile app infrastructure being decommissioned</li>
            <li>Staging Ground Workflow: Canned Comments</li>
            <li>The Ask Wizard (2022) has graduated</li>
          </ul>
        </RightAside>
      </CommonLayout>
      <Footer />
    </>
  );
};

export default Common;

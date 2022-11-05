import styled from 'styled-components';
import { CommonButton } from '../components/Buttons';
import faviconSprite from '../assets/images/faviconSprite.png';
import { useNavigate } from 'react-router-dom';
import { removeLocalStroage } from '../utils/localStorage';

// 연결된 서비스 목록
const serviceList = [
  { name: 'askubuntu', domain: '.com', link: 'https://askubuntu.com/' },
  {
    name: 'mathoverflow',
    domain: '.net',
    link: 'https://mathoverflow.net/',
  },
  {
    name: 'serverfault',
    domain: '.com',
    link: 'https://serverfault.com/',
  },
  { name: 'stackapps', domain: '.com', link: 'https://stackapps.com/' },
  {
    name: 'stackexchange',
    domain: '.com',
    link: 'https://stackexchange.com/',
  },
  {
    name: 'stackoverflow',
    domain: '.com',
    link: 'https://stackoverflow.com/',
  },
  { name: 'superuser', domain: '.com', link: 'https://superuser.com/' },
];

const LogOutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: var(--black-050);

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin-bottom: 24px;
    text-align: center;
    font-size: 21px;
    font-weight: 400;
  }

  .box {
    box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
      0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
    width: 320px;
    padding: 24px;
    border-radius: 7px;
    background-color: #ffffff;

    .reminder {
      margin-top: 32px;
      margin-bottom: 0;
      font-size: 12px;
      color: var(--fc-light);
    }

    .check {
      margin-bottom: 12px;
      font-size: 12px;

      input {
        margin-right: 4px;
      }
    }
  }

  .service-list {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--black-100);
    margin-bottom: 14px;

    a {
      color: var(--blue-600);
      display: flex;
      font-size: 15px;

      span {
        margin: 4px 4px 6px;
      }
    }

    .favicon {
      width: 16px;
      height: 16px;
      margin: 4px;
      background-color: transparent;
      background-image: url(${faviconSprite});
      background-size: 16px 7038px;
      background-repeat: no-repeat;
    }

    .askubuntu {
      background-position: 0 -360px;
    }

    .mathoverflow {
      background-position: 0 -4032px;
    }

    .serverfault {
      background-position: 0 -5652px;
    }

    .stackapps {
      background-position: 0 -6084px;
    }

    .stackoverflow {
      background-position: 0 -6138px;
    }
    .superuser {
      background-position: 0 -6282px;
    }
  }
`;

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStroage();
    navigate('/');
  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <LogOutWrapper>
      <div className="content-wrapper">
        <h3>
          Clicking “Log out” will log you out of the following
          <br />
          domains on this device:
        </h3>
        <div className="box">
          <ul className="service-list">
            {serviceList.map((service) => {
              return (
                <li key={service.name}>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={service.name + ' favicon'}></div>
                    <span>{service.name + service.domain}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="check">
            <input type="checkbox" id="checkAll" />
            <label htmlFor="checkAll">Log out on all devices</label>
          </div>
          <CommonButton
            bgColor="var(--blue-500)"
            color="#fff"
            border="transparent"
            onClick={() => handleLogout()}
          >
            Log out
          </CommonButton>
          <CommonButton
            bgColor="transparent"
            color="var(--blue-600);"
            border="transparent"
            onClick={() => handleCancel()}
          >
            Cancel
          </CommonButton>
          <p className="reminder">
            If you’re on a shared computer, remember to log out of your Open ID
            provider (Facebook, Google, Stack Exchange, etc.) as well.
          </p>
        </div>
      </div>
    </LogOutWrapper>
  );
};

export default LogOut;

import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { CommonButton } from '../Buttons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 220px;
  position: absolute;
  top: 47px;
  left: -87px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--black-075);
  border-radius: 15px;
  box-shadow: 0 1px 5px 3px hsl(0deg 0% 0% / 5%), 0 1px 4px hsl(0deg 0% 0% / 5%),
    0 2px 8px hsl(0deg 0% 0% / 5%);

  .user-avatar {
    .user-avatar-icon {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      background: var(--orange-100);
      fill: var(--orange-400);
    }
  }

  .user-name {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
    color: var(--black-500);
  }

  .logout-button {
    display: flex;
    align-items: center;

    .logout-icon {
      margin-right: 5px;
      width: 15px;
      height: 15px;
      fill: hsl(27, 90%, 55%);
    }
  }
`;

const UserProfile = ({ toggle, toggleSet }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.loginReducer);

  const handleLogout = () => {
    toggleSet(!toggle);
    navigate('/logout');
  };

  return (
    <ProfileContainer>
      <div className="user-avatar">
        <AiOutlineUser className="user-avatar-icon" />
      </div>
      <div className="user-name">{user.displayName}</div>
      <CommonButton
        className="logout-button"
        color="var(--orange-400)"
        border="var(--orange-400)"
        bgColor="var(--orange-050)"
        onClick={handleLogout}
      >
        <MdLogout className="logout-icon" />
        Log Out
      </CommonButton>
    </ProfileContainer>
  );
};

export default UserProfile;

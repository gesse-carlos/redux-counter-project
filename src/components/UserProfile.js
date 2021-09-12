import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const auth = useSelector((state) => state.authState.isAuthenticated);

  const renderUserProfile = () => (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );

  return (
    auth ? renderUserProfile() : null
  );
};

export default UserProfile;

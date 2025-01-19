// import { useAppContext } from './Navbar';
import { useAppContext } from './useAppContext';
import { NavbarContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext(NavbarContext);
  console.log('UserContainer render');
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;

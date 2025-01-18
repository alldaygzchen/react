import UserContainer from './UserContainer';

const NavLinks = () => {
  console.log('NavLinks render');
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
export default NavLinks;

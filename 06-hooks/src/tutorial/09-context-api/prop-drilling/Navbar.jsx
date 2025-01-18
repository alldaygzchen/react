import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const currentPlace = 'navbar';
  const logout = () => {
    console.log(currentPlace);
    console.log('trigger');
    setUser(null);
  };
  console.log('navbar render');
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;

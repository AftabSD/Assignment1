import { useState } from 'react';

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#eee' }}>
      <div>Assignment 1</div>
      <button onClick={toggleLogin}>{loggedIn ? 'logout' : 'login'}</button>
    </nav>
  );
}

export default NavBar;

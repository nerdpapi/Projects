import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">ShopEasy</Link>
      <Link to="/cart">Cart 🛒</Link>
    </nav>
  );
}

export default Navbar;

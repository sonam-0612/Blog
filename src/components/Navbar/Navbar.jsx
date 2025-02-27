import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>InnoWave</div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/explore">Explore</Link> {/* This link will open the Explore page */}
        </li>
    {/* <li className='nav-item'>
          <Link to="/about">About</Link>
        </li>*/}
        
      </ul>
    </div>
  );
};

export default Navbar;

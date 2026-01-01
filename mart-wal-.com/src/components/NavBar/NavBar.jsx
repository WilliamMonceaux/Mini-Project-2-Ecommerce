import { NavLink } from 'react-router-dom';
import './NavBar.css';

 function NavBar() {
    return(<nav className='navbar component-box'>
        <ul>
            <li><NavLink to ='/'>Home</NavLink></li>
            <li><NavLink to ='/shop'>Shop</NavLink></li>
            <li><NavLink to ='/cart'>Cart</NavLink></li>
            <li><NavLink to ='/sign-up'>Signup</NavLink></li>
            <li><NavLink to ='/about'>About</NavLink></li>
        </ul>
    </nav>);
 }

export { NavBar };
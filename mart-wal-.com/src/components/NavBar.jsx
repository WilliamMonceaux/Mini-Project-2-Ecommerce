import { Link } from 'react-router-dom';
import '../components/NavBar.css';

 function NavBar() {
    return(<nav className='navbar component-box'>
        <ul>
            <li> <Link to ='/'>Home</Link></li>
            <li><Link to ='/shop'>Shop</Link></li>
            <li><Link to ='/cart'>Cart</Link></li>
            <li><Link to ='/about'>About</Link></li>
        </ul>
    </nav>);
 }

export { NavBar };
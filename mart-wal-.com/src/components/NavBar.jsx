import { Link } from 'react-router-dom';

 function NavBar() {
    return(<nav>
        <Link to ='/'>Home</Link>
        <Link to ='/shop'>Shop</Link>
        <Link to ='/cart'>Cart</Link>
        <Link to ='/about'>About</Link>
    </nav>);
}

export { NavBar };
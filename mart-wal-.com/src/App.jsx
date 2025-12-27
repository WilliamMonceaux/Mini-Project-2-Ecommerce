import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Shop } from './pages/Shop/Shop.jsx';
import { Cart } from './pages/Cart/Cart.jsx';
import { About } from './pages/About/About.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/About' element={<About />} />
    </Routes>
  );
}

export default App;

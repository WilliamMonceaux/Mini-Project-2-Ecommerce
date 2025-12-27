import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Shop } from './pages/Shop/Shop.jsx';
import { Cart } from './pages/Cart/Cart.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Cart' element={<Cart />} />
    </Routes>
  );
}

export default App;

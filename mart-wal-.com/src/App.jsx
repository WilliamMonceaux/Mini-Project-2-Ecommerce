import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Shop } from './pages/Shop/Shop.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
    </Routes>
  );
}

export default App;

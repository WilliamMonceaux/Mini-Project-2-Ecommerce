import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Home } from "./pages/Home/Home.jsx";
import { Shop } from "./pages/Shop/Shop.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { About } from "./pages/About/About.jsx";
import { NavBar } from './components/NavBar/NavBar.jsx';
import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { LogoutBtn } from './components/Logout/LogoutBtn.jsx';
import { AddItemsToCart } from "./Context/CartContext.jsx";
import { UserProvider } from './Context/UserContext.jsx';
import SignUp from "./pages/Sign-up/SignUp.jsx";

function App() {
  return (
    <AddItemsToCart>
      <UserProvider>
        <Header />
        <NavBar />
        <LogoutBtn />
        
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </Box>
      <Footer />
      </Box>
      </UserProvider>
    </AddItemsToCart>
  );
}

export default App;

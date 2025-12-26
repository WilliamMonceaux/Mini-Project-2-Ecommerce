import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { PromoContainer } from '../components/PromoContainer';
import '../components/home.css';

function Home() {
    return(
        <>
        <Header />
        <NavBar />
        <PromoContainer />
        </>
    );
}

export { Home };
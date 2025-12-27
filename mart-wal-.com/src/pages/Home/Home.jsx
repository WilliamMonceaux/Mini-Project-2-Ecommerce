import { NavBar } from '../../components/NavBar/NavBar';
import { Header } from '../../components/Header/Header';
import { PromoContainer } from '../../components/PromoContainer/PromoContainer';

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
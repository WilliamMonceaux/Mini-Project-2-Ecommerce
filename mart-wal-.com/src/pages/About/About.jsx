import { NavBar } from '../../components/NavBar/NavBar';
import { Header } from '../../components/Header/Header';
import './about.css';


function About() {
    return(<>
    <Header />
    <NavBar />
    <main>
        <section>
            <p>This project is to demonstrate my ability to apply using and creating React Components, using hooks, fetching and displaying data from external API, </p>
            <p>integrating React UI Library (This case Material UI), and with Git commits and pushes.</p>
        </section>
    </main>
    </>);
}

export { About };
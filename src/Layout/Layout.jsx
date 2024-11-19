import Banner from "../Components/banner";
import Cards from "../Components/AdventuteCard";
import Navbar from "../Components/navbar";


const Layout = () => {
    return (
        <div>
            <nav className="md:w-11/12 mx-auto"><Navbar></Navbar></nav>
            <header><Banner></Banner></header>
            <main>
                <Cards></Cards>
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
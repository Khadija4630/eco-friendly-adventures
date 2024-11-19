import Banner from "../Components/banner";
import AdventureCard from "../Components/AdventureCard";
import Navbar from "../Components/navbar";


const Layout = () => {
    return (
        <div className="font-poppins">
            <nav className="md:w-11/12 mx-auto"><Navbar></Navbar></nav>
            <header><Banner></Banner></header>
            <main>
                <AdventureCard></AdventureCard>
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
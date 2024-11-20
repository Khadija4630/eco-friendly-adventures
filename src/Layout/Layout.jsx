import Banner from "../Components/banner";
import AdventureCard from "../Components/AdventureCard";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";  
import LeftCategory from "../Components/LeftCategory";

const Layout = () => {
    return (
        <div className="font-poppins">
            <nav className="md:w-11/12 mx-auto"><Navbar></Navbar></nav>
            <header><Banner></Banner></header>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-10 gap-3">
            <aside className="left col-span-3"><LeftCategory></LeftCategory></aside>
            <section className="col-span-7"><AdventureCard></AdventureCard></section>
            <section></section>
            <section></section>
            </main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Layout;
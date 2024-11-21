import Banner from "../Components/banner";
// import AdventureCard from "../Components/AdventureCard";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";  
import Travel from "../Components/Travel";
import AdventureInstructions from "../Components/AdventureInstructions";
// import SocialLogin from "../Components/SocialLogin/SocialLogin";

const Layout = () => {
    return (
        <div className="font-poppins bg-slate-50">
            <nav className="md:w-11/12 mx-auto"><Navbar></Navbar></nav>
            <header><Banner></Banner></header>
            <main className="w-11/12 mx-auto pt-5 gap-3">
            <section><Travel></Travel></section>
            <section><AdventureInstructions></AdventureInstructions></section>
            <section></section>
            </main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Layout;
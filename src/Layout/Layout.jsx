import Banner from "../Components/banner";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";  
import Travel from "../Components/Travel";
import AdventureInstructions from "../Components/AdventureInstructions";
import AdventureDetails from "../Components/AdventureDetails";
// import SocialLogin from "../Components/SocialLogin/SocialLogin";
import AdventureHighlights from "../Components/AdventureHighlights";
import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Layout = () => {
    useEffect(() => {
    AOS.init({
        duration: 1000, 
        easing: "ease-in-out", 
        once: true, 
    });
}, []);

    return (
        <div className="font-poppins bg-slate-50">
            <nav className="md:w-11/12 mx-auto"><Navbar></Navbar></nav>
            <header><Banner></Banner></header>
            <main className="w-11/12 mx-auto pt-5 gap-3">
            <section><AdventureDetails></AdventureDetails></section>
            <section><Travel></Travel></section>
            <section><AdventureInstructions></AdventureInstructions></section>
            <section><AdventureHighlights></AdventureHighlights></section>
            </main>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Layout;
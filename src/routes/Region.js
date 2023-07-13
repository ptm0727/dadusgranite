import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Reg from "../components/Region"
function Variety(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwaW1hZ2VzJTIwc2hvdyUyMG1hcmJsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        title="Discover a granite wonderland of endless choices."
        btnClass="hide"
        />
        <Reg/>
        <Footer/>
        </>
    )
}
export default Variety;
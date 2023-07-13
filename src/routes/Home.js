import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Variety from "../components/Variety";
import Region from "../components/Region";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
          <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1599209250635-26c180f28419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Discover a granite wonderland of endless choices."
        text="Choose Your Favourite Granites."
        buttonText="Explore"
        url="/"
        btnClass="show"
        />
        <Variety/>
        <Region/>
        <Footer/>
        </>
    )
}
export default Home;
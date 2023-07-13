import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contacti from "../assests/contactimg1.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={contacti}
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact;
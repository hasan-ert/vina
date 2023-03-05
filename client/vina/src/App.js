//styles
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

//Components
import Hero from "./components/Hero/Hero";
import CustomNavbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import JoinUs from "./components/JoinUs/JoinUs";
import { useRef } from "react";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
    const handleScroll = (id) => {
        var element = document.getElementById(id);
        var headerOffset = (1080 * 7) / 100;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };
    return (
        <div className="App">
            <Container fluid className="app-main-container">
                <CustomNavbar scrollHandler={handleScroll}></CustomNavbar>

                <Hero></Hero>
                <Cards></Cards>
                <JoinUs></JoinUs>
                <ContactUs></ContactUs>
            </Container>
        </div>
    );
}

export default App;

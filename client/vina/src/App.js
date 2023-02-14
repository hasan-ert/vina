//styles
import {Container, Row, Col} from "react-bootstrap"
import "./App.css"

//Components
import Hero from "./components/Hero/Hero";
import CustomNavbar from "./components/Navbar/Navbar"
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Container fluid className="app-main-container">
          <CustomNavbar></CustomNavbar>
   
            <Hero></Hero>
            <Cards></Cards>
      </Container>
    </div>
  );
}

export default App;

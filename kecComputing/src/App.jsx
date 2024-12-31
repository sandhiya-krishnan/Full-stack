import "./App.css";
import About from "./Components/FunctionComponents/About";
import Contact from "./Components/FunctionComponents/Contact";
import Gallery from "./Components/FunctionComponents/Gallery";
import Home from "./Components/FunctionComponents/Home";
import NavBar from "./Components/FunctionComponents/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
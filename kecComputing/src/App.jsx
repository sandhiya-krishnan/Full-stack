import "./App.css";
import About from "./Components/FunctionComponents/About";
import Contact from "./Components/FunctionComponents/Contact";
import Gallery from "./Components/FunctionComponents/Gallery";
import Home from "./Components/FunctionComponents/Home";
import NavBar from "./Components/FunctionComponents/NavBar";
import UseEffect from "./Components/FunctionComponents/UseEffect";
import UseRef from "./Components/FunctionComponents/UseRef";
import UseContext from "./Components/FunctionComponents/UseContext";
import ExamResults from './Components/FunctionComponents/UseContext';
import UseMemo from "./Components/FunctionComponents/UseMemo";
import Footer from "./Components/FunctionComponents/Footer";
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
          <Route path="/useeffect" element = {<UseEffect />} />
          <Route path="/use-ref" element = {<UseRef />} />
          <Route path="/usecontext" element = {<ExamResults />} />
          <Route path="/usememo" element = {<UseMemo />} />
          <Route path="/footer" element = {<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
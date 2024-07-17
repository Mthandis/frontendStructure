import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Coding from "./pages/Coding";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Error from "./pages/Error";
import SharedLayout from './pages/SharedLayout';



function App() {
  return (
    <Router>
      <Routes>
       
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='coding' element={<Coding />} />
          <Route path='contact' element={<Contact />} />
          <Route path='education' element={<Education />} />
          <Route path='*' element={<Error />} />
        </Route> 

      </Routes>
    </Router>
  );
}

export default App;

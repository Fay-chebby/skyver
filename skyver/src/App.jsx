import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/about page/About.jsx";
import Contact from "./Pages/contact/Contact.jsx";

function App() {


  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
         <Route path="/contact" element={< Contact/>}/>
     </Routes>
   </Router>

  )
}

export default App

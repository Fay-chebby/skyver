import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/about page/About.jsx";

function App() {


  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
     </Routes>
   </Router>

  )
}

export default App

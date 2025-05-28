import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/about page/About.jsx";

function App() {


  return (
   <Router>
     <Routes>
       <Route path="/" render={() => <Home />} />
       <Route path="/about" component={<About />} />
     </Routes>
   </Router>

  )
}

export default App

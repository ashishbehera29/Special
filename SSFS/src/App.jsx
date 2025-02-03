
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SecondComponent from "./SecondComponent";
import ThirdComponent from './ThirdComponent';
import FourthComp from './FourthComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/i" element={<SecondComponent />} />
        <Route path="/love" element={<ThirdComponent/>} />
        <Route path="/you" element={<FourthComp/>} />
      </Routes>
    </Router>
  );
}

export default App;



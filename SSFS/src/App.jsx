
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
        <Route path="/second" element={<SecondComponent />} />
        <Route path="/third" element={<ThirdComponent/>} />
        <Route path="/fourth" element={<FourthComp/>} />
      </Routes>
    </Router>
  );
}

export default App;



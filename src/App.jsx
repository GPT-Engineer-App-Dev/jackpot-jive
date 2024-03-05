import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Winners from "./pages/Winners";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </Router>
  );
}

export default App;

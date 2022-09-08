import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bank from "./views/Bank";
import InterestCalculation from "./pages/InterestCalculation";
import Interest from "./pages/Interest"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bank />} />
        <Route path="/ınterestcalculation" element={<InterestCalculation />} />
        <Route path="/ınterest" element={<Interest />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bank from "./views/Bank";
import InterestCalculation from "./pages/InterestCalculation";
import Interest from "./pages/Interest"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bank />} />
        <Route path="/─▒nterestcalculation" element={<InterestCalculation />} />
        <Route path="/─▒nterest" element={<Interest />} />

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

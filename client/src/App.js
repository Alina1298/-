import DeductionModal from "./DeductionModal/DeductionModal";
import MainPage from "./MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/deductionmodal" element={<DeductionModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

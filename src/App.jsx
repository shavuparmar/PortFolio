import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
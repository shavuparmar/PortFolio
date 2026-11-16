import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

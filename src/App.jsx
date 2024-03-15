import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MasterParameter } from "./pages/MasterParameter";
import { NavbarComponent } from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MasterParameter />} />
      </Routes>
    </div>
  );
}

export default App;

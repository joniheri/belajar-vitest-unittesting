import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MasterParameter } from "./pages/MasterParameter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MasterParameter />} />
      </Routes>
    </div>
  );
}

export default App;

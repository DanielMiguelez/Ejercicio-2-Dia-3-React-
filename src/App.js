import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Reserve from "./components/Reserve/Reserve";
import Home from "./components/Home/Home";
import Dani from "./components/Dani/Dani";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/dani" element={<Dani/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

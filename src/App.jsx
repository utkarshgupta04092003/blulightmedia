import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Aboutus from "./pages/aboutus/Aboutus";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

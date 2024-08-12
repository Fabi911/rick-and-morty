import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Add from "./pages/Add.tsx";

export default function App() {
  return (
    <>
      {/* <MainPage />*/}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}
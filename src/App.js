import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "components/HomePage/HomePage";
import HomeWrapper from "./pages/homeWrapper";
import Header from "./components/Header/Header";

function App() {
  return (
    // <Header/>
    <Routes>
      <Route path="/" element={<HomeWrapper />}>
        <Route index element={<Navigate to="/" />} />
        <Route path="/mens" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

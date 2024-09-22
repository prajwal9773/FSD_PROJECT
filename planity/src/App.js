import React from "react";
import Background from "./components/Background";
import Homepagelayout from "./components/marketing-page/Homepagelayout";
import Login from "./components/marketing-page/pages/Login";
import Signup from "./components/marketing-page/pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepagelayout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Background />
    </>
  );
}

export default App;

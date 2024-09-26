import React from "react";
import Homepagelayout from "./components/Homepage/Homepagelayout";
import Login from "./components/TeamPage/Login";
import Signup from "./components/TeamPage/Signup";
import Background from "./components/TeamPage/Background"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepagelayout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login/bg" element={<Background />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

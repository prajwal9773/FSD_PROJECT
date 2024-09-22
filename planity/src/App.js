import React from "react";
// import Background from "./components/Background";
import Homepagelayout from "./components/Homepage/Homepagelayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Background /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepagelayout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

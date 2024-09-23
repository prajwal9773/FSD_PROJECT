import React from 'react';
import PlanityImage from './img/planity.png';

export default function Navbar() {
  return (
    <div className="fixed w-full top-0 h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto w-full flex items-center justify-between">
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={PlanityImage} alt="Planity Logo" style={{ height: "30px", width: "30px", marginTop: "5px", marginRight: "8px" }} />
        <p style={{ fontWeight: "bold", fontSize: "larger", color: "black" }}>Planity</p>
        </div>
        <div className="md:block mx:auto flex items-center justify-between">
          <a href="/login">
            <button className="mt-2 bg-neutral-800 text-white py-2 px-4 rounded-md mr-2">
              Login
            </button>
          </a>
          <a href="/signup">
            <button className="mt-2 bg-neutral-800 text-white py-2 px-4 rounded-md mr-4">
              Signup
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

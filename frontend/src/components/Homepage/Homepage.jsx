import React from "react";

import {  Medal } from "lucide-react";

const HomePage = () => {
  return (
    <>
    
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col"style={{width:'500px'}}>
        <div
          className="text-xl mb-4  mt-20 flex items-center   border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-md"
          style={{ textAlign: 'center' , fontWeight:'bolder'}}>
          <Medal className="h-30 w-6 mr-2 mt-15" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 "style={{fontFamily:" 'Nunito', 'Helvetica Neue', 'Arial', 'sans-serif'"}}>
          Planity
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Workforward
        </div>
        <div className="text-sm md:text-xl text-neutral-500 mt-4 max-w-3xl ms:max-w-2xl" style={{width:'700px',textAlign:"center"}}>
          Welcome to Planity(Project management), your all-in-one platform for
          streamlining tasks, tracking progress, and boosting team
          collaboration. Manage projects efficiently with intuitive dashboards
          and real-time updates.
        </div>
        <a href="/signup">
          <button className="mt-6 bg-neutral-800 text-white py-2 px-4 rounded-md">
            Get Planity for free
          </button>
        </a>
      </div>
    </div>
    </>
  );
};

export default HomePage;

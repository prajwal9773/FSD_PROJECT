import React from 'react';
import HomePage from './Homepage';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepagelayout = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar/>
      <HomePage/>
      <main className="pt-40 pb-20 bg-slate-100">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Homepagelayout;

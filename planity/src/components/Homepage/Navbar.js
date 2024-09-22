
import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed w-full top-0 h-14 px-4 border-b shadow-sm bg-white flex items-center" >
        <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
            logo
            <div className=' md:block mx:auto flex items-center justify-between w-full ' style={{ marginLeft: '1320px'}}>
                <a href="/login">
                 <button className="mt-2 bg-neutral-800 text-white py-2 px-4 rounded-md mr-2">
                    Login
                 </button>
                </a>
            </div>
            <a href="/signup">
              <button className="mt-2 bg-neutral-800 text-white py-2 px-4 rounded-md mr-4">
                Signup
              </button>
            </a>
        </div>
    
    </div>
  )
}

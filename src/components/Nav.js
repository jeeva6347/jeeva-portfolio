import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
function Nav() {
  const [toggle,settoggle]=useState(false);
  return (
    
    <header className=" fixed top-0 w-full h-20 flex bg-slate-900/90
         backdrop-blur-md justify-between items-center px-10 p-6 z-50" >
      <a href="#home" className="font-semibold  px-7 text-xl  sm:text-2xl font-serif
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        tracking-tight">Jeeva L</a>
      <nav className="hidden md:block">
    <ul className="flex text-white">
       <li><a href="#home">Home</a></li>
       <li> <a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

    </ul>
    </nav>
    {toggle && <nav className="block md:hidden">
    <ul className="flex flex-col text-white mobile-nav">
       <li><a href="#home">Home</a></li>
       <li> <a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

    </ul>
    </nav>}
    <button onClick={()=>settoggle(!toggle)} className='block md:hidden '><Bars3Icon className='text-white  h-5'/></button>
    </header>
   
  );
}

export default Nav;

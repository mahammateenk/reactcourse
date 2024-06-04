import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200  " style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 shadow-lg'>
    <button
    onClick={()=> { setColor('red')}}
    className='px-3 py-2 rounded-md text-white bg-red-600'
    >Red</button>
    <button
     onClick={()=> { setColor('blue')}}
    className='px-3 py-2 rounded-md text-white bg-blue-600'
    >Blue</button>
    <button
     onClick={()=> { setColor('green')}}
    className='px-3 py-2 rounded-md text-white bg-green-600'
    >Green</button>
      </div>

      </div>
    </div>
  );
}

export default App;

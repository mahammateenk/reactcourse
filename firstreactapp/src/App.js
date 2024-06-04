import About from "./About";
import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(15);

const addValue = () =>

  { 
    setCount((count)=> count+1)
    setCount((count)=> count+1)
    setCount((count)=> count+1)
    setCount((count)=> count+1)
  }

  
const userdetails = ["Maham", "frontend", "specialist"]
  return (
    <div className="grid grid-cols-3 gap-4 p-5">

<Card details={userdetails}/>
  

    </div>
   
  )
}

export default App;

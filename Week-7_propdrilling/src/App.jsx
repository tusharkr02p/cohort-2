import { useContext, useState } from "react"
import { CountCOntext } from "./components/Context";

function App() {
 const [count , setCount] = useState(0);


  return (
    <div>
      <CountCOntext.Provider value={{count, setCount}}>

     <Count/>
      </CountCOntext.Provider>
    </div>
  )
}
function Count(){
return <div>
<CountRender/>
<Button  /> 
</div>
}

function CountRender(){
  const {count} = useContext(CountCOntext);
  return <div>
    {count}
  </div>
}
function Button(){
  const {count , setCount }= useContext(CountCOntext);
  return <div>

 <button onClick={()=>{
   setCount(count + 1);
}}>Increasing</button>

 <button onClick={()=>{
   setCount(count - 1);
}}>Decrease</button>
</div>
}

export default App

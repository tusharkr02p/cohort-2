import { useEffect, useMemo, useState } from "react";
function App(){
  // const[count , setCount] = useState(0);
  // function buttonClick(){
  //   setCount(count + 1);
  // }

  //use memo concept
  const [exchangeData1 ,setExhangeData1] = useState({});
  const [exchangeData2 ,setExhangeData2] = useState({});
  const [bankData ,setBankData] = useState({});

  useEffect(()=>{
    setTimeout(() => {
      setExhangeData1({return:100})
    }, 3000);
  },[])
  
  useEffect(()=>{
    setTimeout(() => {
      setExhangeData2({return:100})
    }, 1000);
  },[])
  
  useEffect(()=>{
    setTimeout(() => {
      setBankData({income:100})
    }, 5000);
  },[])

  const cryptoReturn = useMemo(()=>{
    return exchangeData1.return + exchangeData2.return;
  }, [exchangeData1 ,exchangeData2]) 
  const incomeTaxx = (cryptoReturn + bankData.income) * 0.3;
  return <div>
    {/* <button onClick={()=>setCount(count + 1)}>counter {count} </button> */}
  hi there {incomeTaxx}

  </div>
}
export default App;
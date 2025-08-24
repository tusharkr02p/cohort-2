import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
// import { Dashboard} from './Component/Dashboard'
// import { Landing } from './Component/Landing'
const Dashboard =lazy(()=> import('./Component/Dashboard'))
const Landing =lazy(()=> import('./Component/Landing'))

function App() {
 


  return (
    <div>
    <BrowserRouter>
    <Appbar/> 
    <Suspense fallback={<div>loading...</div>}>
     <Routes>
      <Route  path="/dashboard" element={<Dashboard/> }  />
      <Route  path="/" element={<Landing/> } />
     </Routes>
      </Suspense>
     
    </BrowserRouter>
    </div>
  )
}


function Appbar(){
   const navigate = useNavigate();
  return <div>
    <div >
        {/* hi this is top bar */}
        <button onClick={()=>{
          navigate('/')
        }}>LandingPage</button>
         
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
  </div>
}
export default App

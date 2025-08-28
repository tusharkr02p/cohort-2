
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { EvenSelector }  from "./store/atoms/Selector";
function App() {



  return (
    <div>
      <RecoilRoot>
          <Count/> 
      </RecoilRoot>

    </div>
  )
}
function Count(){
return <div>
<CountRender/>
<Button   /> 
</div>
}

function CountRender(){
const count = useRecoilValue(countAtom);
  return <div>
    <b>

    {count}
    </b>
    <EventCountRender/>
  </div>
}
function EventCountRender(){
  const isEven  = useRecoilValue(EvenSelector);

  return <div>
    { isEven ? "it is even" : null}
  </div>
}
function Button(){
 const setCount = useSetRecoilState(countAtom);
 
  return <div>

 <button onClick={()=>{
   setCount(count => count + 1);
}}>Increasing</button>

 <button onClick={()=>{
   setCount(count => count - 1);
}}>Decrease</button>
</div>
}

export default App

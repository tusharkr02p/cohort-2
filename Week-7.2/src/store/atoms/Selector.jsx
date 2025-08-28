import { selector } from "recoil";
import { countAtom } from "./count";

 


 export const EvenSelector = selector({
    key:"EvenSelecto",
    get: ({get}) =>{
        const count = get(countAtom);
        return (count % 2===0);

    }
 })
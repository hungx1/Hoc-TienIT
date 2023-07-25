
import { useState } from "react";
import Content from "./Content";

//1. memo() => Higher Order Component (HOC)
//Memo ghi nhớ lại props của 1 component đê quyết định lại re-render lại hay không
//2. useCallback()

//Hooks
//HOC
//Render props

function Memo() {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);

   const increase = () => {
      setCount(count + 1)
   }

   const increase2 = () => {
      setCount2(count2 + 1)
   }
   return (
      <div style={{padding: `10px 32px`}}>
         <h1>{count}</h1>
         <h1>{count2}</h1>
         <Content count = {count2}/>
         <button onClick={() =>increase()}>Click me</button>
         <button onClick={() =>increase2()}>Click me 2</button>
      </div>
   )
};

export default Memo;
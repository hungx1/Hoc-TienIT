



//1. memo() => Higher Order Component (HOC)
//2. useCallback() (Khi use voi memo)
    //- Reference types
    //- React memo()

import { useCallback, useState } from "react";
import Content from "./Content";

function CallbackHook() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(pre => pre + 1)
    }, [])

    return (
        <div style={{padding: '10px 32px'}}>
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
            

        </div>
    )
}

export default CallbackHook;
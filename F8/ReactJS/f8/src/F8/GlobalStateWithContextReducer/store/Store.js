import { useContext } from 'react'
import {StoreContext} from './index'



function Store() {

    const state = useContext(StoreContext)
    console.log(state);
    return (
        
        <h1>
            Hello
        </h1>
    )
}

export default Store
import { useMemo, useRef, useState } from "react";

//Memo la 1 HOC, con useMemo la 1 hook
function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name, 
            price: parseInt(price)}])
            setName('')
            setPrice(``)
            nameRef.current.focus();
    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price;
            }, 0
        );
        return result;
    }, [products])

  

    return (
        <div style={{padding: `10px 32px`}}>
            <input 
            ref={nameRef}
            value={name}
            placeholder="Enter name ..."
            onChange={e => setName(e.target.value)} />
            <br />
            <input 
            value={price}
            placeholder="Enter price ..."
            onChange={e => setPrice(e.target.value)} />
            <br />
            <button onClick={handleSubmit}> Add</button>
            <div>Total: {total}</div>
            <ul>
                {products && products.map((product,index) => {
                       return <li key={index}>{product.name} - {product.price} </li>
                    })}
            </ul>

        </div>
       

    )
}

export default UseMemo;
import { useState } from "react";

function AddToCart({ inputV }) {

    const [cartValue, setCartValue] = useState(0);
    function increment() {
        setCartValue(cartValue + 1)
    }
    function decrement() {
        setCartValue(cartValue - 1)
    }

    return (
        <div>
            AddToCart  - {inputV}
        </div>
    )
}

export default AddToCart;
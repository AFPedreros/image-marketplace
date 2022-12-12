import React, { useState, useContext } from "react";
import { Context } from "../src/Context";
import CartItem from "../components/CartItem";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const { cartItems, emptyCart } = useContext(Context);
    const totalCost = cartItems.length * 5.99;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    const cartItemElement = cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
    });

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order placed!");
            setButtonText("Place Order");
            emptyCart();
        }, 3000);
    }

    return (
        <main className="cart-page">
            {cartItemElement}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {cartItems.length > 0 ? (
                    <button onClick={placeOrder}>{buttonText}</button>
                ) : (
                    <p>You have no items in your cart!</p>
                )}
            </div>
        </main>
    );
}

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ₹{totalPrice}</p>
      {Object.values(cartItems).map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <button disabled>Checkout (Coming Soon)</button>
    </div>
  );
}

export default CartPage;
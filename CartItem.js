import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", background: "#fff", padding: "1rem", borderRadius: "8px" }}>
      <img src={item.image} alt={item.name} style={{ width: "100px", marginRight: "1rem" }} />
      <div style={{ flex: 1 }}>
        <h4>{item.name}</h4>
        <p>₹{item.price} x {item.quantity}</p>
        <div>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
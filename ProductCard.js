import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => state.cart.items[plant.id]);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", background: "#fff", width: "200px" }}>
      <img src={plant.image} alt={plant.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h4>{plant.name}</h4>
      <p>₹{plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
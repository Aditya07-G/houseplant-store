import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#4CAF50", color: "#fff" }}>
      <h2>GreenLeaf Plants</h2>
      <nav>
        <Link to="/products" style={{ color: "#fff", marginRight: "20px" }}>Products</Link>
        <Link to="/cart" style={{ color: "#fff" }}>
          🛒 Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
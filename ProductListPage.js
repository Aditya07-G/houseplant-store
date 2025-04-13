import React from "react";
import plants from "../data/plants";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const categories = ["Indoor", "Flowering", "Hanging"];
  return (
    <div style={{ padding: "2rem" }}>
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat} Plants</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === cat).map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
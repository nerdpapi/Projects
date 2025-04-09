function ProductCard({ product }) {
    const handleAddToCart = () => {
      alert(`${product.name} added to cart!`);
    };
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductCard;
  
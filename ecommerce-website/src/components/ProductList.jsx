import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: 499, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jeans', price: 899, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Sneakers', price: 1499, image: 'https://via.placeholder.com/150' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

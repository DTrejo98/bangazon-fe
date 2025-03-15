'use client';

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'; // Import useRouter
import { getAllProducts } from '../../api/ProductData'; // Ensure this API method is created
import ProductCard from '../../components/ProductCard'; // Assuming you have a ProductCard component

export default function ProductsPage() {
  // State to store all products
  const [products, setProducts] = useState([]);
  const router = useRouter(); // Initialize useRouter

  // Function to fetch all products
  const getAllTheProducts = () => {
    getAllProducts().then(setProducts); // Assuming you have an API function to fetch all products
  };

  // Fetch products when the component mounts
  useEffect(() => {
    getAllTheProducts();
  }, []);

  // Navigate to the create product page
  const handleCreateProduct = () => {
    router.push('/product/new'); // Redirects to /products/create
  };

  return (
    <div className="text-center my-4">
      {/* Create New Product Button */}
      <Button onClick={handleCreateProduct}>Create New Product</Button>

      {/* Product Cards */}
      <div className="d-flex flex-wrap">
        {products.length === 0 ? (
          <h2>No products available</h2>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              productObj={product}
              onUpdate={getAllTheProducts} // Optional if you want to update the list after a product is added/modified
            />
          ))
        )}
      </div>
    </div>
  );
}

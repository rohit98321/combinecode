import { useParams } from "react-router-dom";
import products from "../../Data/Product";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">

      {/* ================= MAIN PRODUCT SECTION ================= */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl text-indigo-600 font-semibold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description || "This is a premium quality product with excellent features and durability."}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              -
            </button>

            <span className="text-xl font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Add to Cart
            </button>

            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= RELATED PRODUCTS ================= */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
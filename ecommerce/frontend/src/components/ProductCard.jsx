import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-cyan-950 rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-contain rounded-xl"
      />

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <p className="text-yellow-500">
          ⭐ {product.rating}
        </p>

        <p className="text-blue-600 font-bold text-lg">
          ₹{product.price}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};

export default ProductCard;
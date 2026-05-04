import ProductCard from "../components/ProductCard";
import products from "../Data/Product";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Products
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Shop the latest trends with best quality and unbeatable prices.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products delivered quickly at your doorstep.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure and trusted payment methods.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              We provide only the best quality products.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          About Our Store
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are committed to providing high-quality products at affordable prices.
          Our goal is to create the best online shopping experience for our customers.
        </p>
      </section>

      {/* ================= LOCATION SECTION ================= */}
      <section className="py-16 px-8 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Visit Our Store
        </h2>
        <p className="text-gray-700 mb-4">
          123 Market Street, Your City, India
        </p>
        <div className="w-full h-64 bg-gray-400 rounded-lg flex items-center justify-center text-white">
          Google Map Placeholder
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-indigo-700 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Shopping?
        </h2>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Browse Products
        </button>
      </section>

    </div>
  );
};

export default Home;
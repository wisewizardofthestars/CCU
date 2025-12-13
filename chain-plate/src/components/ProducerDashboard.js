import { useState } from "react";

// Simulated blockchain storage (in a real app, this would be on-chain)
const mockBlockchain = {
  products: [],
  addProduct: function (product) {
    const productWithHash = {
      ...product,
      blockHash: Math.random().toString(36).substring(2, 15),
      timestamp: new Date().toISOString(),
      blockNumber: this.products.length + 1,
    };
    this.products.push(productWithHash);
    return productWithHash;
  },
};

function ProducerDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    producer: "",
    location: "",
    certifications: "",
    image: "🥕",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate blockchain transaction
    const product = {
      id: Date.now().toString(),
      name: formData.name,
      producer: formData.producer,
      location: formData.location,
      certifications: formData.certifications.split(",").map((c) => c.trim()),
      image: formData.image,
      harvestDate: new Date().toISOString().split("T")[0],
      supplyChain: [
        {
          stage: "Registered",
          location: formData.location,
          date: new Date().toISOString().split("T")[0],
          verified: true,
        },
      ],
    };

    mockBlockchain.addProduct(product);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setFormData({
      name: "",
      producer: "",
      location: "",
      certifications: "",
      image: "🥕",
    });
  };

  const emojis = ["🍅", "🥕", "🥬", "🍇", "🥔", "🌽", "🥦", "🍆", "🥒", "🌶️"];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Producer Dashboard 👨‍🌾
        </h2>
        <p className="text-gray-600">
          Register your biological products on the blockchain for verified
          traceability
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center animate-pulse">
          ✅ Product successfully registered on the blockchain!
        </div>
      )}

      {/* Registration Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-3">📝</span>
          Register New Product
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Emoji */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Icon
            </label>
            <div className="flex flex-wrap gap-2">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setFormData({ ...formData, image: emoji })}
                  className={`text-3xl p-3 rounded-lg border-2 transition ${
                    formData.image === emoji
                      ? "border-bio-green bg-green-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g., Organic Tomatoes"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-bio-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Producer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Producer/Farm Name *
            </label>
            <input
              type="text"
              required
              value={formData.producer}
              onChange={(e) =>
                setFormData({ ...formData, producer: e.target.value })
              }
              placeholder="e.g., Green Valley Farm"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-bio-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="e.g., California, USA"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-bio-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certifications (comma-separated)
            </label>
            <input
              type="text"
              value={formData.certifications}
              onChange={(e) =>
                setFormData({ ...formData, certifications: e.target.value })
              }
              placeholder="e.g., USDA Organic, Non-GMO, Fair Trade"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-bio-green focus:border-transparent outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-bio-green to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition flex items-center justify-center"
          >
            <span className="mr-2">🔗</span>
            Register on Blockchain
          </button>
        </form>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>📌 How it works:</strong> When you register a product, it
            creates an immutable record on the blockchain. Consumers can scan
            the product's QR code to verify its authenticity and trace its
            complete food chain.
          </p>
        </div>
      </div>

      {/* Blockchain Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-bio-green mb-2">
            {mockBlockchain.products.length}
          </div>
          <div className="text-gray-600">Products Registered</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-bio-green mb-2">100%</div>
          <div className="text-gray-600">Blockchain Verified</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-bio-green mb-2">∞</div>
          <div className="text-gray-600">Immutable Records</div>
        </div>
      </div>
    </div>
  );
}

export default ProducerDashboard;

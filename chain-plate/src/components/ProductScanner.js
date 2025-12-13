import { useState } from "react";

function ProductScanner({ onProductSelect }) {
  const [nftId, setNftId] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    if (!nftId) return;

    setIsScanning(true);

    // Simulate scanning/loading
    setTimeout(() => {
      // Mock product data - in production, this would fetch from blockchain
      const mockProduct = {
        id: nftId,
        name: "Organic Tomatoes",
        producer: "Green Valley Farm",
        location: "California, USA",
        certifications: ["USDA Organic", "Non-GMO", "Fair Trade"],
        harvestDate: "2025-12-10",
        image: "🍅",
        supplyChain: [
          {
            stage: "Harvested",
            location: "Green Valley Farm, CA",
            date: "2025-12-10",
            verified: true,
          },
          {
            stage: "Quality Check",
            location: "Processing Center, CA",
            date: "2025-12-10",
            verified: true,
          },
          {
            stage: "Packaged",
            location: "Distribution Center, CA",
            date: "2025-12-11",
            verified: true,
          },
          {
            stage: "In Transit",
            location: "Local Market",
            date: "2025-12-12",
            verified: true,
          },
        ],
      };

      onProductSelect(mockProduct);
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-6">
        <span className="text-6xl mb-4 block">📱</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Scan Product</h2>
        <p className="text-gray-600">
          Enter the NFT ID from the product sticker
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            value={nftId}
            onChange={(e) => setNftId(e.target.value)}
            placeholder="Enter NFT ID (e.g., 12345)"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-bio-green focus:border-transparent outline-none transition"
            disabled={isScanning}
          />
        </div>

        <button
          onClick={handleScan}
          disabled={!nftId || isScanning}
          className="w-full bg-gradient-to-r from-bio-green to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isScanning ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verifying...
            </span>
          ) : (
            "Verify Product"
          )}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-500">or</p>
          <button className="text-bio-green hover:text-bio-dark font-medium mt-2">
            📷 Scan QR Code
          </button>
          <p className="text-xs text-gray-400 mt-1">
            (Camera feature coming soon)
          </p>
        </div>
      </div>

      {/* Example IDs */}
      <div className="mt-8 pt-6 border-t">
        <p className="text-sm text-gray-600 text-center mb-3">
          Try example IDs:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["12345", "67890", "11111"].map((id) => (
            <button
              key={id}
              onClick={() => setNftId(id)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
            >
              #{id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductScanner;

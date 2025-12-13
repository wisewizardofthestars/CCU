function ProductPage({ product, onBack }) {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-bio-green hover:text-bio-dark font-medium transition"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Scanner
      </button>

      {/* Product Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-start space-x-6">
          <div className="text-8xl">{product.image}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">NFT ID: #{product.id}</p>
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Producer</p>
                <p className="font-semibold text-gray-800">
                  {product.producer}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">
                  {product.location}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Harvest Date</p>
                <p className="font-semibold text-gray-800">
                  {product.harvestDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold text-green-600">Fresh & Organic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Supply Chain Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="mr-3">🔗</span>
          Blockchain-Verified Supply Chain
        </h2>

        <div className="space-y-6">
          {product.supplyChain.map((step, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-6 border-l-2 border-bio-green last:border-transparent"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-bio-green rounded-full flex items-center justify-center">
                {step.verified && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* Step Content */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {step.stage}
                    </h3>
                    <p className="text-gray-600 mt-1">{step.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{step.date}</p>
                    {step.verified && (
                      <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        ✓ On-chain
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NFT Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 border border-purple-200">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
          <span className="mr-2">🎫</span>
          NFT Details
        </h3>
        <p className="text-gray-600 text-sm">
          This product is represented as an NFT on the blockchain, ensuring
          authenticity and traceability. The NFT contains immutable records of
          the entire supply chain journey.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="text-sm bg-white hover:bg-gray-50 border border-purple-300 text-purple-700 px-4 py-2 rounded-lg font-medium transition">
            View on Blockchain Explorer
          </button>
          <button className="text-sm bg-white hover:bg-gray-50 border border-purple-300 text-purple-700 px-4 py-2 rounded-lg font-medium transition">
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

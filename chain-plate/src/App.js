import { useState } from "react";
import ProductScanner from "./components/ProductScanner";
import ProductPage from "./components/ProductPage";
import ProducerDashboard from "./components/ProducerDashboard";
import LoginPage from "./components/LoginPage";
import HomeConsumer from "./components/HomeConsumer";
import LoadingPage from "./components/LoadingPage";
import LoginRegister from "./components/LoginRegister";
import RegisterConsumer from "./components/RegisterConsumer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState("consumer"); // 'consumer' or 'producer'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [consumerView, setConsumerView] = useState("home"); // 'home' or 'scanner'
  const [isLoading, setIsLoading] = useState(true);
  const [authView, setAuthView] = useState("login"); // 'login' | 'register'

  const handleLogin = (userView) => {
    setIsLoggedIn(true);
    setView(userView);
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadComplete={handleLoadComplete} />;
  }

  //if (!isLoggedIn) {
   // return <LoginPage onLogin={handleLogin} />;
  //}


 if (!isLoggedIn) {
    return authView === "login" ? (
      <LoginRegister
        onLoginClick={() => {
          setIsLoggedIn(true);
          setView("consumer");
        }}
        onRegisterClick={() => setAuthView("register")} // <-- switch to register page
      />
    ) : (
      <RegisterConsumer
        onBack={() => setAuthView("login")} // go back to login page
        onLoginClick={() => setAuthView("login")} // "Already have an account?" button
      />
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {view === "consumer" && consumerView === "home" ? (
        <HomeConsumer />
      ) : (
        <>
          {/* Header */}
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">🌱</span>
                  <div>
                    <h1 className="text-2xl font-bold text-bio-dark">
                      Bio Chain Plate
                    </h1>
                    <p className="text-sm text-gray-600">
                      Blockchain-Verified Biological Products
                    </p>
                  </div>
                </div>
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => {
                      setView("consumer");
                      setConsumerView("home");
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      view === "consumer"
                        ? "bg-white text-bio-green shadow"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    🛒 Consumer
                  </button>
                  <button
                    onClick={() => setView("producer")}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      view === "producer"
                        ? "bg-white text-bio-green shadow"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    👨‍🌾 Producer
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {view === "consumer" ? (
              // CONSUMER VIEW - Scan and verify products
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Verify Your Food! 🥬
                  </h2>
                  <p className="text-gray-600">
                    Scan the product sticker to see its complete food chain and
                    verify authenticity on the blockchain
                  </p>
                </div>

                {/* Scanner Component */}
                {!selectedProduct && (
                  <ProductScanner onProductSelect={setSelectedProduct} />
                )}

                {/* Product Display */}
                {selectedProduct && (
                  <ProductPage
                    product={selectedProduct}
                    onBack={() => setSelectedProduct(null)}
                  />
                )}
              </div>
            ) : (
              // PRODUCER VIEW - Register products
              <ProducerDashboard />
            )}
          </main>

          {/* Footer */}
          <footer className="mt-16 py-8 bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
              <p>
                🔗 Blockchain-verified food chain • Building trust in biological
                products
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

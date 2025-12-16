import { useState, useEffect } from "react";
import ProductScanner from "./components/ProductScanner";
import ProductPage from "./components/ProductPage";
import ProducerDashboard from "./components/ProducerDashboard";
import LoginPage from "./components/LoginPage";
import HomeConsumer from "./components/HomeConsumer";
import HomeProducer from "./components/HomeProducer";
import LoadingPage from "./components/LoadingPage";
import LoginRegister from "./components/LoginRegister";
import RegisterConsumer from "./components/RegisterConsumer";
import LoginForm from "./components/LoginForm";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState("consumer"); // 'consumer' or 'producer'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("consumer"); // Track user type

  // Check for existing login on mount
  useEffect(() => {
    const userId = localStorage.getItem("currentUserId");
    const storedUserType = localStorage.getItem("userType");
    if (userId) {
      setIsLoggedIn(true);
      setUserType(storedUserType || "consumer");
      setView(storedUserType || "consumer");
    }
  }, []);
  const [consumerView, setConsumerView] = useState("home"); // 'home' or 'scanner'
  const [isLoading, setIsLoading] = useState(true);
  const [authView, setAuthView] = useState("landing"); // 'landing' | 'login' | 'register'

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
    if (authView === "landing") {
      return (
        <LoginRegister
          onLoginClick={() => setAuthView("login")}
          onRegisterClick={() => setAuthView("register")}
        />
      );
    } else if (authView === "login") {
      return (
        <LoginForm
          onBack={() => setAuthView("landing")}
          onLoginSuccess={() => {
            const storedUserType = localStorage.getItem("userType");
            setIsLoggedIn(true);
            setUserType(storedUserType || "consumer");
            setView(storedUserType || "consumer");
          }}
          onRegisterClick={() => setAuthView("register")}
        />
      );
    } else {
      return (
        <RegisterConsumer
          onBack={() => setAuthView("landing")}
          onLoginClick={() => setAuthView("login")}
          onRegisterSuccess={(registeredUserType) => {
            const finalUserType =
              registeredUserType ||
              localStorage.getItem("userType") ||
              "consumer";
            setIsLoggedIn(true);
            setUserType(finalUserType);
            setView(finalUserType);
          }}
        />
      );
    }
  }

  // Route based on user type
  if (userType === "producer") {
    return <HomeProducer />;
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

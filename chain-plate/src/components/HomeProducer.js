import React, { useState, useEffect } from "react";
import AddProductPage from "./AddProductPage";
import ProductsPage from "./ProductsPage";
import ReportPage from "./ReportPage";
import EditStoryPage from "./EditStoryPage";
import ProducerProfile from "./ProducerProfile";
import NewTemplatePage from "./NewTemplatePage";
import TemplatesPage from "./TemplatesPage";

const API_URL = "http://localhost:3001";

function HomeProducer() {
  const [producerData, setProducerData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showProductSelection, setShowProductSelection] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditStory, setShowEditStory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNewTemplate, setShowNewTemplate] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  useEffect(() => {
    const fetchProducerData = async () => {
      try {
        const userId = localStorage.getItem("currentUserId");
        if (userId) {
          const userRes = await fetch(`${API_URL}/users/${userId}`);
          const userData = await userRes.json();
          setProducerData(userData);

          // Fetch producer's products
          const productsRes = await fetch(`${API_URL}/products`);
          const allProducts = await productsRes.json();
          const myProducts = allProducts.filter(
            (p) => String(p.producerId) === String(userData.producerId)
          );
          setProducts(myProducts);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching producer data:", error);
        setLoading(false);
      }
    };

    fetchProducerData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUserId");
    localStorage.removeItem("userType");
    window.location.reload();
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  if (showAddProduct) {
    return (
      <AddProductPage
        onBack={() => setShowAddProduct(false)}
        onProductAdded={handleProductAdded}
      />
    );
  }

  if (showProducts) {
    return (
      <ProductsPage
        onBack={() => setShowProducts(false)}
        onAddProduct={() => {
          setShowProducts(false);
          setShowAddProduct(true);
        }}
        onNavigateToProfile={() => {
          setShowProducts(false);
          setShowProfile(true);
        }}
        onNavigateToTemplates={() => {
          setShowProducts(false);
          setShowTemplates(true);
        }}
      />
    );
  }

  if (selectedProduct) {
    return (
      <ReportPage
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  if (showEditStory) {
    return <EditStoryPage onBack={() => setShowEditStory(false)} />;
  }

  if (showProfile) {
    return (
      <ProducerProfile
        onBack={() => setShowProfile(false)}
        onLogout={handleLogout}
      />
    );
  }

  if (showNewTemplate) {
    return <NewTemplatePage onBack={() => setShowNewTemplate(false)} />;
  }

  if (showTemplates) {
    return (
      <TemplatesPage
        onBack={() => setShowTemplates(false)}
        onAddTemplate={() => {
          setShowTemplates(false);
          setShowNewTemplate(true);
        }}
        onNavigateToProducts={() => {
          setShowTemplates(false);
          setShowProducts(true);
        }}
        onNavigateToProfile={() => {
          setShowTemplates(false);
          setShowProfile(true);
        }}
      />
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="text-[#45ADA1] text-2xl mb-2">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[360px] mx-auto h-screen bg-white relative flex flex-col font-['Outfit']">
      {/* Status Bar */}
      <div className="w-full h-[37px] border-b border-[#D9D9D9] bg-white flex items-center justify-between px-2 flex-shrink-0 z-20">
        <div className="text-base font-normal text-black">16:20</div>
        <div className="flex items-center gap-[5px]">
          <svg width="15" height="11" viewBox="0 0 16 12" fill="none">
            <path
              d="M7.7998 9.25C8.35209 9.25 8.7998 9.69771 8.7998 10.25C8.7998 10.8023 8.35209 11.25 7.7998 11.25C7.24763 11.2499 6.7998 10.8022 6.7998 10.25C6.7998 9.6978 7.24763 9.25013 7.7998 9.25ZM7.70898 6C9.07307 6.00013 10.2976 6.6022 11.1299 7.55078C11.4213 7.8829 11.3888 8.38829 11.0566 8.67969C10.7245 8.97094 10.2191 8.93753 9.92773 8.60547C9.38611 7.98818 8.59319 7.59961 7.70898 7.59961H7.70801C7.28832 7.59915 6.87349 7.68911 6.49121 7.8623C6.10888 8.03557 5.76759 8.28856 5.49121 8.60449C5.20032 8.93705 4.69486 8.97058 4.3623 8.67969C4.03 8.3888 3.99641 7.88424 4.28711 7.55176C4.7138 7.06394 5.2398 6.67285 5.83008 6.40527C6.42023 6.13782 7.06106 5.9994 7.70898 6ZM7.70898 3C8.72797 2.99887 9.73665 3.20444 10.6738 3.60449C11.6114 4.00477 12.4579 4.59197 13.1621 5.3291C13.4672 5.64858 13.4562 6.15478 13.1367 6.45996C12.8172 6.76509 12.311 6.75303 12.0059 6.43359C11.4513 5.85308 10.7843 5.3914 10.0459 5.07617C9.30754 4.76095 8.51279 4.59861 7.70996 4.59961H7.70801C6.90517 4.59861 6.11044 4.76095 5.37207 5.07617C4.6337 5.3914 3.96669 5.85308 3.41211 6.43359C3.10692 6.75302 2.60072 6.7651 2.28125 6.45996C1.9618 6.15479 1.95074 5.64858 2.25586 5.3291C2.96007 4.59197 3.80656 4.00477 4.74414 3.60449C5.68102 3.20457 6.68935 2.999 7.70801 3L7.70898 3.7998V3ZM8.25391 0.0136719C10.9582 0.151339 13.3946 1.308 15.1846 3.10547C15.4963 3.41855 15.4957 3.92555 15.1826 4.2373C14.8695 4.54904 14.3625 4.54745 14.0508 4.23438C12.4293 2.60619 10.1875 1.59961 7.70898 1.59961H7.70801C6.52968 1.59807 5.36259 1.8302 4.27441 2.28223C3.18615 2.73433 2.19764 3.39828 1.36719 4.23438C1.05588 4.54738 0.549697 4.54926 0.236328 4.23828C-0.0771485 3.92692 -0.0789368 3.41992 0.232422 3.10645C1.21181 2.12041 2.37673 1.33788 3.66016 0.804688C4.9433 0.271625 6.31953 -0.00167063 7.70898 0V0.799805L7.70996 0L8.25391 0.0136719Z"
              fill="#222227"
            />
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M0.900391 8C1.39727 8.00021 1.7998 8.40346 1.7998 8.90039V10.9004C1.79959 11.3971 1.39714 11.7996 0.900391 11.7998C0.403465 11.7998 0.000210992 11.3973 0 10.9004V8.90039C0 8.40333 0.403334 8 0.900391 8ZM4.2002 5.2998C4.69707 5.30002 5.09961 5.70327 5.09961 6.2002V10.8994C5.09961 11.3963 4.69707 11.7996 4.2002 11.7998C3.70314 11.7998 3.2998 11.3965 3.2998 10.8994V6.2002C3.2998 5.70314 3.70314 5.2998 4.2002 5.2998ZM7.59961 2.7002C8.09655 2.7002 8.49981 3.10271 8.5 3.59961V10.9004C8.49976 11.3972 8.09652 11.7998 7.59961 11.7998C7.10286 11.7996 6.70043 11.3971 6.7002 10.9004V3.59961C6.70038 3.10282 7.10282 2.70038 7.59961 2.7002ZM10.9004 0C11.3973 0.000211056 11.7998 0.403465 11.7998 0.900391V10.9004C11.7996 11.3971 11.3971 11.7996 10.9004 11.7998C10.4035 11.7998 10.0002 11.3973 10 10.9004V0.900391C10 0.403334 10.4033 0 10.9004 0Z"
              fill="#222227"
            />
          </svg>
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.98399 4.40901C2.37174 3.98705 2.89763 3.75 3.44599 3.75H11.7163C12.2646 3.75 12.7905 3.98705 13.1782 4.40901C13.566 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3365 6.41946 14.5566 6.65901C14.9444 7.08097 15.1622 7.65326 15.1622 8.25V9.75C15.1622 10.3467 14.9444 10.919 14.5566 11.341C14.3365 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.566 13.169 13.1782 13.591C12.7905 14.0129 12.2646 14.25 11.7163 14.25H3.44599C2.89763 14.25 2.37174 14.0129 1.98399 13.591C1.59625 13.169 1.37842 12.5967 1.37842 12V6C1.37842 5.40326 1.59625 4.83097 1.98399 4.40901ZM3.44599 5.25C3.2632 5.25 3.0879 5.32902 2.95866 5.46967C2.82941 5.61032 2.7568 5.80109 2.7568 6V12C2.7568 12.1989 2.82941 12.3897 2.95866 12.5303C3.0879 12.671 3.2632 12.75 3.44599 12.75H11.7163C11.899 12.75 12.0743 12.671 12.2036 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.714 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.582 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.582 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.714 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2036 5.46967C12.0743 5.32902 11.899 5.25 11.7163 5.25H3.44599ZM4.82436 6.75C5.20499 6.75 5.51355 7.08579 5.51355 7.5V10.5C5.51355 10.9142 5.20499 11.25 4.82436 11.25C4.44374 11.25 4.13517 10.9142 4.13517 10.5V7.5C4.13517 7.08579 4.44374 6.75 4.82436 6.75ZM7.58112 6.75C7.96175 6.75 8.27031 7.08579 8.27031 7.5V10.5C8.27031 10.9142 7.96175 11.25 7.58112 11.25C7.20049 11.25 6.89193 10.9142 6.89193 10.5V7.5C6.89193 7.08579 7.20049 6.75 7.58112 6.75ZM10.3379 6.75C10.7185 6.75 11.0271 7.08579 11.0271 7.5V10.5C11.0271 10.9142 10.7185 11.25 10.3379 11.25C9.95725 11.25 9.64869 10.9142 9.64869 10.5V7.5C9.64869 7.08579 9.95725 6.75 10.3379 6.75Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Curved Header with Welcome Message */}
      <div className="relative w-full h-[100px] bg-gradient-to-r from-[#45ADA1] to-[#3d9a8f] flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <div className="text-[32px]">🍎</div>
          <div className="flex-1 text-center">
            <p
              className="text-white text-[16px] font-medium"
              style={{
                fontFamily:
                  "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Bem vindo de volta,
            </p>
            <p
              className="text-white text-[20px] font-bold"
              style={{
                fontFamily:
                  "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {producerData?.name?.split(" ")[0] || "Producer"}!
            </p>
          </div>
          <button className="text-white text-[28px]">🔔</button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-white rounded-t-[30px]"></div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-[80px] bg-white px-4">
        {/* Quick Actions Section */}
        <div className="mt-2">
          <h2
            className="text-[18px] font-bold text-gray-800 mb-3"
            style={{
              fontFamily:
                "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Quick Actions
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setShowAddProduct(true)}
              className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[120px]"
            >
              <img
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop"
                alt="Fresh produce"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <p
                  className="text-white text-[14px] font-semibold"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  New Product
                </p>
              </div>
            </button>

            <button
              onClick={() => setShowNewTemplate(true)}
              className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[120px]"
            >
              <img
                src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=300&h=300&fit=crop"
                alt="Add template"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <p
                  className="text-white text-[14px] font-semibold"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Add template
                </p>
              </div>
            </button>

            <button
              onClick={() => setShowProductSelection(true)}
              className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[120px]"
            >
              <img
                src="https://mgt.sjp.ac.lk/bec/wp-content/uploads/2016/02/report-writing.jpg"
                alt="Fast Report"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <p
                  className="text-white text-[14px] font-semibold"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Fast Report
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Get back to work Section */}
        <div className="mt-6">
          <h2
            className="text-[18px] font-bold text-gray-800 mb-3"
            style={{
              fontFamily:
                "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Get back to work
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowProducts(true)}
              className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[140px]"
            >
              <img
                src="https://cdn.britannica.com/73/8773-050-A2356F63/Watermelon-citrullus-lanatus.jpg"
                alt="Products"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p
                  className="text-white text-[16px] font-bold"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Products
                </p>
              </div>
            </button>

            <button
              onClick={() => setShowEditStory(true)}
              className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[140px]"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop"
                alt="Edit your story"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p
                  className="text-white text-[16px] font-bold"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Edit your story
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* My stories Section */}
        <div className="mt-6 mb-4">
          <h2
            className="text-[18px] font-bold text-gray-800 mb-3"
            style={{
              fontFamily:
                "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            My stories
          </h2>
          <div className="space-y-3">
            {products.length > 0 ? (
              products.slice(0, 3).map((product) => (
                <button
                  key={product.id}
                  className="relative overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition h-[100px] w-full"
                >
                  <img
                    src={
                      product.image ||
                      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=200&fit=crop"
                    }
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p
                      className="text-white text-[16px] font-bold text-left"
                      style={{
                        fontFamily:
                          "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {product.name}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8 px-4">
                <div className="w-[80px] h-[80px] bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="#9CA3AF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-gray-500 text-[14px] text-center"
                  style={{
                    fontFamily:
                      "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  No products yet. Add your first product to get started!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full h-[70px] border-t border-[#E8E8E8] bg-white/95 backdrop-blur-md flex items-center justify-around px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0 z-20">
        {/* Dashboard */}
        <button className="relative flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-[#45ADA1] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="3"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="14"
                y="14"
                width="7"
                height="7"
                rx="1"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>

        {/* Products */}
        <button
          onClick={() => setShowProducts(true)}
          className="flex flex-col items-center gap-1 hover:scale-110 transition"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Products
          </span>
        </button>

        {/* Templates */}
        <button
          onClick={() => setShowTemplates(true)}
          className="flex flex-col items-center gap-1 hover:scale-110 transition"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V8H20"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Templates
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => setShowProfile(true)}
          className="flex flex-col items-center gap-1 hover:scale-110 transition"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Profile
          </span>
        </button>
      </div>

      {/* Product Selection Modal */}
      {showProductSelection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-[20px] p-6 mx-4 max-w-[320px] w-full shadow-2xl max-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[20px] font-bold text-gray-800">
                Select Product
              </h3>
              <button
                onClick={() => setShowProductSelection(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {products.length > 0 ? (
                <div className="space-y-3">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowProductSelection(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition"
                    >
                      <img
                        src={
                          product.image ||
                          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=100&h=100&fit=crop"
                        }
                        alt={product.name}
                        className="w-[60px] h-[60px] rounded-[10px] object-cover"
                      />
                      <div className="flex-1 text-left">
                        <h4 className="text-[14px] font-bold text-gray-800">
                          {product.name}
                        </h4>
                        <p className="text-[13px] text-[#45ADA1] font-semibold">
                          {product.price}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-gray-500 text-[14px]">
                    No products available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeProducer;

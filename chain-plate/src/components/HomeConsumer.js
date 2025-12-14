import React, { useState, useEffect } from "react";
import AllProducts from "./AllProducts";
import AllProducers from "./AllProducers";
import AllFarms from "./AllFarms";
import MapPage from "./MapPage";

const API_URL = "http://localhost:3001";

function HomeConsumer() {
  const [detailView, setDetailView] = useState(null);
  const [products, setProducts] = useState([]);
  const [producers, setProducers] = useState([]);
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, producersRes, farmsRes] = await Promise.all([
          fetch(`${API_URL}/products`),
          fetch(`${API_URL}/producers`),
          fetch(`${API_URL}/farms`),
        ]);

        const productsData = await productsRes.json();
        const producersData = await producersRes.json();
        const farmsData = await farmsRes.json();

        setProducts(productsData);
        setProducers(producersData);
        setFarms(farmsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products based on selected filter
  const filteredProducts = selectedFilter
    ? products.filter(
        (product) => product.tags && product.tags.includes(selectedFilter)
      )
    : products;

  // Filter producers based on selected filter
  const filteredProducers = selectedFilter
    ? producers.filter(
        (producer) => producer.tags && producer.tags.includes(selectedFilter)
      )
    : producers;

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  // If in detail view, show the appropriate component
  if (detailView === "products") {
    return (
      <AllProducts
        onBack={() => setDetailView(null)}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterClick}
      />
    );
  }
  if (detailView === "producers") {
    return (
      <AllProducers
        onBack={() => setDetailView(null)}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterClick}
      />
    );
  }
  if (detailView === "farms") {
    return <AllFarms onBack={() => setDetailView(null)} />;
  }
  if (detailView === "map") {
    return <MapPage onBack={() => setDetailView(null)} />;
  }

  if (loading) {
    return (
      <div className="w-full max-w-[360px] mx-auto h-screen bg-white flex items-center justify-center">
        <div className="text-[#45ADA1] font-['Outfit'] text-[18px] font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  const oldProducts = [
    {
      id: 1,
      name: "Mirtilos",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b86f00b0413577b512dceeb1461ecf08f8d9af85?width=302",
      distance: "1.7 km",
      price: "1.5€",
    },
    {
      id: 2,
      name: "Morangos",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b9ca48a07174a47e4b539b4e206f1552ab403fb6?width=302",
      distance: "0.3 km",
      price: "2.3€",
    },
    {
      id: 3,
      name: "Uvas",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/39e32d41c02e04f07926a10085ff47a225d515f7?width=302",
      distance: "1.2 km",
      price: "2.3€",
    },
    {
      id: 4,
      name: "Laranjas",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b86f00b0413577b512dceeb1461ecf08f8d9af85?width=302",
      distance: "2.1 km",
      price: "1.8€",
    },
    {
      id: 5,
      name: "Maçãs",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b9ca48a07174a47e4b539b4e206f1552ab403fb6?width=302",
      distance: "0.8 km",
      price: "1.2€",
    },
    {
      id: 6,
      name: "Peras",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/39e32d41c02e04f07926a10085ff47a225d515f7?width=302",
      distance: "3.2 km",
      price: "2.5€",
    },
    {
      id: 7,
      name: "Cerejas",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b86f00b0413577b512dceeb1461ecf08f8d9af85?width=302",
      distance: "1.5 km",
      price: "3.0€",
    },
    {
      id: 8,
      name: "Melancia",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b9ca48a07174a47e4b539b4e206f1552ab403fb6?width=302",
      distance: "2.8 km",
      price: "2.8€",
    },
    {
      id: 9,
      name: "Kiwis",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/39e32d41c02e04f07926a10085ff47a225d515f7?width=302",
      distance: "0.9 km",
      price: "1.9€",
    },
    {
      id: 10,
      name: "Abacate",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b86f00b0413577b512dceeb1461ecf08f8d9af85?width=302",
      distance: "1.3 km",
      price: "2.1€",
    },
  ];

  return (
    <div className="w-full max-w-[360px] mx-auto h-screen bg-white relative flex flex-col font-['Outfit']">
      {/* Status Bar */}
      <div className="w-full h-[37px] border-b border-[#D9D9D9] bg-white flex items-center justify-between px-2 flex-shrink-0 z-20">
        <div className="text-base font-normal text-black">16:20</div>
        <div className="flex items-center gap-[5px]">
          <svg
            width="15"
            height="11"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.7998 9.25C8.35209 9.25 8.7998 9.69771 8.7998 10.25C8.7998 10.8023 8.35209 11.25 7.7998 11.25C7.24763 11.2499 6.7998 10.8022 6.7998 10.25C6.7998 9.6978 7.24763 9.25013 7.7998 9.25ZM7.70898 6C9.07307 6.00013 10.2976 6.6022 11.1299 7.55078C11.4213 7.8829 11.3888 8.38829 11.0566 8.67969C10.7245 8.97094 10.2191 8.93753 9.92773 8.60547C9.38611 7.98818 8.59319 7.59961 7.70898 7.59961H7.70801C7.28832 7.59915 6.87349 7.68911 6.49121 7.8623C6.10888 8.03557 5.76759 8.28856 5.49121 8.60449C5.20032 8.93705 4.69486 8.97058 4.3623 8.67969C4.03 8.3888 3.99641 7.88424 4.28711 7.55176C4.7138 7.06394 5.2398 6.67285 5.83008 6.40527C6.42023 6.13782 7.06106 5.9994 7.70898 6ZM7.70898 3C8.72797 2.99887 9.73665 3.20444 10.6738 3.60449C11.6114 4.00477 12.4579 4.59197 13.1621 5.3291C13.4672 5.64858 13.4562 6.15478 13.1367 6.45996C12.8172 6.76509 12.311 6.75303 12.0059 6.43359C11.4513 5.85308 10.7843 5.3914 10.0459 5.07617C9.30754 4.76095 8.51279 4.59861 7.70996 4.59961H7.70801C6.90517 4.59861 6.11044 4.76095 5.37207 5.07617C4.6337 5.3914 3.96669 5.85308 3.41211 6.43359C3.10692 6.75302 2.60072 6.7651 2.28125 6.45996C1.9618 6.15479 1.95074 5.64858 2.25586 5.3291C2.96007 4.59197 3.80656 4.00477 4.74414 3.60449C5.68102 3.20457 6.68935 2.999 7.70801 3L7.70898 3.7998V3ZM8.25391 0.0136719C10.9582 0.151339 13.3946 1.308 15.1846 3.10547C15.4963 3.41855 15.4957 3.92555 15.1826 4.2373C14.8695 4.54904 14.3625 4.54745 14.0508 4.23438C12.4293 2.60619 10.1875 1.59961 7.70898 1.59961H7.70801C6.52968 1.59807 5.36259 1.8302 4.27441 2.28223C3.18615 2.73433 2.19764 3.39828 1.36719 4.23438C1.05588 4.54738 0.549697 4.54926 0.236328 4.23828C-0.0771485 3.92692 -0.0789368 3.41992 0.232422 3.10645C1.21181 2.12041 2.37673 1.33788 3.66016 0.804688C4.9433 0.271625 6.31953 -0.00167063 7.70898 0V0.799805L7.70996 0L8.25391 0.0136719Z"
              fill="#222227"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.900391 8C1.39727 8.00021 1.7998 8.40346 1.7998 8.90039V10.9004C1.79959 11.3971 1.39714 11.7996 0.900391 11.7998C0.403465 11.7998 0.000210992 11.3973 0 10.9004V8.90039C0 8.40333 0.403334 8 0.900391 8ZM4.2002 5.2998C4.69707 5.30002 5.09961 5.70327 5.09961 6.2002V10.8994C5.09961 11.3963 4.69707 11.7996 4.2002 11.7998C3.70314 11.7998 3.2998 11.3965 3.2998 10.8994V6.2002C3.2998 5.70314 3.70314 5.2998 4.2002 5.2998ZM7.59961 2.7002C8.09655 2.7002 8.49981 3.10271 8.5 3.59961V10.9004C8.49976 11.3972 8.09652 11.7998 7.59961 11.7998C7.10286 11.7996 6.70043 11.3971 6.7002 10.9004V3.59961C6.70038 3.10282 7.10282 2.70038 7.59961 2.7002ZM10.9004 0C11.3973 0.000211056 11.7998 0.403465 11.7998 0.900391V10.9004C11.7996 11.3971 11.3971 11.7996 10.9004 11.7998C10.4035 11.7998 10.0002 11.3973 10 10.9004V0.900391C10 0.403334 10.4033 0 10.9004 0Z"
              fill="#222227"
            />
          </svg>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.98399 4.40901C2.37174 3.98705 2.89763 3.75 3.44599 3.75H11.7163C12.2646 3.75 12.7905 3.98705 13.1782 4.40901C13.566 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3365 6.41946 14.5566 6.65901C14.9444 7.08097 15.1622 7.65326 15.1622 8.25V9.75C15.1622 10.3467 14.9444 10.919 14.5566 11.341C14.3365 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.566 13.169 13.1782 13.591C12.7905 14.0129 12.2646 14.25 11.7163 14.25H3.44599C2.89763 14.25 2.37174 14.0129 1.98399 13.591C1.59625 13.169 1.37842 12.5967 1.37842 12V6C1.37842 5.40326 1.59625 4.83097 1.98399 4.40901ZM3.44599 5.25C3.2632 5.25 3.0879 5.32902 2.95866 5.46967C2.82941 5.61032 2.7568 5.80109 2.7568 6V12C2.7568 12.1989 2.82941 12.3897 2.95866 12.5303C3.0879 12.671 3.2632 12.75 3.44599 12.75H11.7163C11.899 12.75 12.0743 12.671 12.2036 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.714 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.582 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.582 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.714 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2036 5.46967C12.0743 5.32902 11.899 5.25 11.7163 5.25H3.44599ZM4.82436 6.75C5.20499 6.75 5.51355 7.08579 5.51355 7.5V10.5C5.51355 10.9142 5.20499 11.25 4.82436 11.25C4.44374 11.25 4.13517 10.9142 4.13517 10.5V7.5C4.13517 7.08579 4.44374 6.75 4.82436 6.75ZM7.58112 6.75C7.96175 6.75 8.27031 7.08579 8.27031 7.5V10.5C8.27031 10.9142 7.96175 11.25 7.58112 11.25C7.20049 11.25 6.89193 10.9142 6.89193 10.5V7.5C6.89193 7.08579 7.20049 6.75 7.58112 6.75ZM10.3379 6.75C10.7185 6.75 11.0271 7.08579 11.0271 7.5V10.5C11.0271 10.9142 10.7185 11.25 10.3379 11.25C9.95725 11.25 9.64869 10.9142 9.64869 10.5V7.5C9.64869 7.08579 9.95725 6.75 10.3379 6.75Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Top Header Bar */}
      <div className="w-full h-[50px] shadow-[0_2px_8px_rgba(69,173,161,0.15)] flex items-center justify-between px-4 bg-white flex-shrink-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] bg-gradient-to-br from-[#45ADA1] to-[#45ADA1]/70 rounded-lg flex items-center justify-center">
            <span className="text-white font-['Outfit'] text-[18px] font-bold">
              C
            </span>
          </div>
          <div>
            <h3 className="text-[#45ADA1] font-['Outfit'] text-[16px] font-semibold leading-tight">
              ChainPlate
            </h3>
            <p className="text-gray-400 font-['Roboto'] text-[10px] leading-tight">
              Farm to Table
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-[32px] h-[32px] rounded-full bg-gray-50 hover:bg-gray-100 transition flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="7"
                stroke="#404040"
                strokeWidth="1.5"
              />
              <path
                d="M13.5 13.5L17 17"
                stroke="#404040"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="relative w-[32px] h-[32px] rounded-full bg-gray-50 hover:bg-gray-100 transition flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z"
                stroke="#404040"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70803 18.3304 9.42117 18.2537 9.16816 18.1079C8.91515 17.9622 8.70484 17.7526 8.55835 17.5"
                stroke="#404040"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#45ADA1] rounded-full"></div>
          </button>
          <button className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#45ADA1] to-[#45ADA1]/70 flex items-center justify-center hover:scale-105 transition">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="6" r="3" fill="white" />
              <path
                d="M15 15.5C15 18.5 9 18.5 9 18.5C9 18.5 3 18.5 3 15.5C3 12.5 5.5 11 9 11C12.5 11 15 12.5 15 15.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Filters */}
        <div className="flex gap-2 px-4 mt-4 overflow-x-auto scrollbar-hide">
          {["Organic", "Bio", "Sustainable", "Local"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-1.5 rounded-full border-2 transition ${
                selectedFilter === filter
                  ? "bg-[#45ADA1] border-[#45ADA1]"
                  : "bg-white border-[#E8E8E8] hover:border-[#45ADA1]"
              }`}
            >
              <span
                className={`font-['Outfit'] text-[14px] font-medium ${
                  selectedFilter === filter ? "text-white" : "text-gray-600"
                }`}
              >
                {filter}
              </span>
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#404040] font-['Outfit'] text-[18px] font-semibold">
              Fresh Products
            </h2>
            <button
              onClick={() => setDetailView("products")}
              className="text-[#45ADA1] font-['Outfit'] text-[13px] font-medium hover:underline"
            >
              View all
            </button>
          </div>
          <div
            className="flex flex-nowrap gap-3 overflow-x-scroll scrollbar-hide -mx-4 px-4 py-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-[160px] flex-shrink-0 group cursor-pointer"
              >
                <div className="w-[160px] h-[130px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#45ADA1] transition-all relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[85px] object-cover"
                  />
                  <div className="w-full h-[45px] bg-white flex flex-col justify-center px-3">
                    <span className="text-black font-['Outfit'] text-[15px] font-semibold leading-tight">
                      {product.name}
                    </span>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="text-gray-500 font-['Outfit'] text-[12px] flex items-center gap-1">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <circle
                            cx="5"
                            cy="5"
                            r="4"
                            stroke="#45ADA1"
                            strokeWidth="1"
                          />
                        </svg>
                        {product.distance}
                      </span>
                      <span className="text-[#45ADA1] font-['Outfit'] text-[14px] font-bold">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M17.3667 3.84166C16.9411 3.41583 16.4357 3.07803 15.8795 2.84757C15.3233 2.6171 14.7271 2.49847 14.1251 2.49847C13.523 2.49847 12.9268 2.6171 12.3706 2.84757C11.8144 3.07803 11.309 3.41583 10.8834 3.84166L10.0001 4.725L9.11673 3.84166C8.25698 2.98192 7.09092 2.49892 5.87506 2.49892C4.6592 2.49892 3.49314 2.98192 2.63339 3.84166C1.77365 4.70141 1.29065 5.86747 1.29065 7.08333C1.29065 8.29919 1.77365 9.46525 2.63339 10.325L10.0001 17.6917L17.3667 10.325C17.7926 9.89937 18.1304 9.39401 18.3608 8.83779C18.5913 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5913 5.88508 18.3608 5.32887C18.1304 4.77265 17.7926 4.26729 17.3667 3.84166Z"
                        stroke="#1E1E1E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Producers Section */}
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#404040] font-['Outfit'] text-[18px] font-semibold">
              Top Producers
            </h2>
            <button
              onClick={() => setDetailView("producers")}
              className="text-[#45ADA1] font-['Outfit'] text-[13px] font-medium hover:underline"
            >
              View all
            </button>
          </div>
          <div
            className="flex flex-nowrap gap-3 overflow-x-scroll scrollbar-hide -mx-4 px-4 py-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredProducers.map((producer) => (
              <div
                key={producer.id}
                className="min-w-[160px] flex-shrink-0 group cursor-pointer"
              >
                <div className="w-[160px] h-[130px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#45ADA1] transition-all">
                  <img
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-[85px] object-cover"
                  />
                  <div className="w-full h-[45px] bg-white flex items-center justify-center">
                    <span className="text-[#404040] font-['Outfit'] text-[14px] font-semibold">
                      {producer.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discover new stories Section */}
        <div className="mt-6 px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[#404040] font-['Outfit'] text-[18px] font-semibold">
              Farm Stories
            </h2>
            <button
              onClick={() => setDetailView("farms")}
              className="text-[#45ADA1] font-['Outfit'] text-[13px] font-medium hover:underline"
            >
              Explore
            </button>
          </div>
          <div
            className="flex flex-nowrap gap-3 overflow-x-scroll scrollbar-hide -mx-4 px-4 py-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {farms.map((farm) => (
              <div
                key={farm.id}
                className="min-w-[160px] flex-shrink-0 group cursor-pointer"
              >
                <div className="w-[160px] h-[130px] rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#45ADA1] transition-all relative">
                  <img
                    src={farm.image}
                    alt="Farm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white font-['Outfit'] text-[13px] font-medium">
                      {farm.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full h-[70px] border-t border-[#E8E8E8] bg-white/95 backdrop-blur-md flex items-center justify-around px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0 z-20">
        <button className="relative flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 rounded-full bg-[#45ADA1] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <svg width="24" height="24" viewBox="0 0 28 32" fill="none">
              <path
                d="M1 10.7388V30.2388H9.5V25.2388V18.7388H18.5V24.7388V30.2388H27V10.7388L13.5 1.23877L1 10.7388Z"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>

        <button
          onClick={() => setDetailView("map")}
          className="flex flex-col items-center gap-1 hover:scale-110 transition"
        >
          <svg width="28" height="28" viewBox="0 0 31 31" fill="none">
            <path
              d="M10.3333 23.25L1.29163 28.4167V7.75001L10.3333 2.58334M10.3333 23.25L20.6666 28.4167M10.3333 23.25V2.58334M20.6666 28.4167L29.7083 23.25V2.58334L20.6666 7.75001M20.6666 28.4167V7.75001M20.6666 7.75001L10.3333 2.58334"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">Map</span>
        </button>

        <button className="flex flex-col items-center hover:scale-110 transition">
          <div className="w-14 h-14 -mt-7 rounded-2xl bg-gradient-to-br from-[#45ADA1] to-[#3d9a8f] flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M3 9H21M9 3V21M15 9V21" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-[10px] text-[#45ADA1] font-['Outfit'] font-medium mt-1">
            SCAN
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:scale-110 transition">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path
              d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Saved
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:scale-110 transition">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Rewards
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomeConsumer;

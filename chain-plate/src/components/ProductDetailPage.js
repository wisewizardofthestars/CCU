import React, { useState, useEffect } from "react";
import ProductChain from "./ProductChain";

const API_URL = "http://localhost:3001";

function ProductDetailPage({ product, onBack, onLikeToggle, isLiked }) {
  const [producer, setProducer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProductChain, setShowProductChain] = useState(false);

  useEffect(() => {
    const fetchProducer = async () => {
      if (product.producerId) {
        try {
          const response = await fetch(
            `${API_URL}/producers/${product.producerId}`
          );
          const data = await response.json();
          setProducer(data);
        } catch (error) {
          console.error("Error fetching producer:", error);
        }
      }
      setLoading(false);
    };

    fetchProducer();
  }, [product.producerId]);

  if (showProductChain) {
    return (
      <ProductChain
        onBack={() => setShowProductChain(false)}
        product={product}
      />
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

      {/* Product Image with Back and Like Buttons */}
      <div className="relative w-full h-[280px] flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-md"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={onLikeToggle}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-md group/heart"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={isLiked ? "#ef4444" : "none"}
            className="group-hover/heart:scale-110 transition-transform"
          >
            <path
              d="M17.3667 3.84166C16.9411 3.41583 16.4357 3.07803 15.8795 2.84757C15.3233 2.6171 14.7271 2.49847 14.1251 2.49847C13.523 2.49847 12.9268 2.6171 12.3706 2.84757C11.8144 3.07803 11.309 3.41583 10.8834 3.84166L10.0001 4.725L9.11673 3.84166C8.25698 2.98192 7.09092 2.49892 5.87506 2.49892C4.6592 2.49892 3.49314 2.98192 2.63339 3.84166C1.77365 4.70141 1.29065 5.86747 1.29065 7.08333C1.29065 8.29919 1.77365 9.46525 2.63339 10.325L10.0001 17.6917L17.3667 10.325C17.7926 9.89937 18.1304 9.39401 18.3608 8.83779C18.5913 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5913 5.88508 18.3608 5.32887C18.1304 4.77265 17.7926 4.26729 17.3667 3.84166Z"
              stroke={isLiked ? "#ef4444" : "#404040"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-36 pt-4">
        <div className="bg-white rounded-t-3xl -mt-6 relative z-10 px-6 pt-6 pb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-[#404040] font-['Outfit'] text-[24px] font-bold mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-3">
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#45ADA1]/10 text-[#45ADA1] rounded-full text-[12px] font-['Outfit'] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {product.distance && (
                <div className="flex items-center gap-1 text-gray-500 text-[13px] font-['Outfit']">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="#45ADA1"
                      strokeWidth="1.5"
                    />
                  </svg>
                  {product.distance}
                </div>
              )}
            </div>
            <div className="text-[#45ADA1] font-['Outfit'] text-[28px] font-bold">
              {product.price}
            </div>
          </div>

          {/* Producer Info */}
          {producer && !loading && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h2 className="text-[#404040] font-['Outfit'] text-[16px] font-semibold mb-3">
                From Producer
              </h2>
              <div className="flex items-center gap-3 bg-[#F5F5F5] rounded-xl p-3">
                <img
                  src={producer.image}
                  alt={producer.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-[#404040] font-['Outfit'] text-[15px] font-semibold">
                    {producer.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-[12px] font-['Outfit'] mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        stroke="#45ADA1"
                        strokeWidth="1.5"
                      />
                    </svg>
                    {producer.distance}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Details */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h2 className="text-[#404040] font-['Outfit'] text-[16px] font-semibold mb-3">
              About this Product
            </h2>
            <p className="text-gray-600 font-['Outfit'] text-[14px] leading-relaxed">
              Fresh, locally-sourced {product.name.toLowerCase()} from our
              organic farms. Carefully harvested and delivered to ensure the
              highest quality and freshness. Perfect for your healthy lifestyle.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h2 className="text-[#404040] font-['Outfit'] text-[16px] font-semibold mb-3">
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-[#45ADA1]/20 rounded-lg"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.6667 5L7.50004 14.1667L3.33337 10"
                      stroke="#45ADA1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#404040] font-['Outfit'] text-[13px] font-medium">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 px-6 py-4 flex-shrink-0 z-20">
        <button
          onClick={() => setShowProductChain(true)}
          className="w-full bg-white text-[#45ADA1] border-2 border-[#45ADA1] font-['Outfit'] text-[15px] font-semibold py-3 rounded-xl hover:bg-[#45ADA1]/5 transition mb-3 flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3L9 9M21 21L15 15M15 9L21 3M9 15L3 21"
              stroke="#45ADA1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" stroke="#45ADA1" strokeWidth="2" />
          </svg>
          View Product Chain
        </button>
        <button className="w-full bg-[#45ADA1] text-white font-['Outfit'] text-[16px] font-semibold py-3.5 rounded-xl hover:bg-[#3d9a8f] transition shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;

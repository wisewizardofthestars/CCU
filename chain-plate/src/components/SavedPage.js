import React, { useState } from "react";

function SavedPage({ onBack, savedProducts = [], onProductUnliked }) {
  const [displayedProducts, setDisplayedProducts] = useState(savedProducts);

  const handleUnlike = async (productId) => {
    const userId = localStorage.getItem("currentUserId");
    if (!userId) return;

    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`);
      const userData = await response.json();

      const updatedLikedProducts = userData.likedProducts.filter(
        (p) => p.id !== productId
      );

      await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likedProducts: updatedLikedProducts,
          savedItems: updatedLikedProducts.length,
        }),
      });

      setDisplayedProducts(displayedProducts.filter((p) => p.id !== productId));

      // Notify parent to refresh liked products
      if (onProductUnliked) {
        onProductUnliked();
      }
    } catch (error) {
      console.error("Error unliking product:", error);
    }
  };
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
              d="M13.3333 1H3.66667C2.19391 1 1 2.19391 1 3.66667V14.3333C1 15.8061 2.19391 17 3.66667 17H13.3333C14.8061 17 16 15.8061 16 14.3333V3.66667C16 2.19391 14.8061 1 13.3333 1ZM3.66667 0C1.64162 0 0 1.64162 0 3.66667V14.3333C0 16.3584 1.64162 18 3.66667 18H13.3333C15.3584 18 17 16.3584 17 14.3333V3.66667C17 1.64162 15.3584 0 13.3333 0H3.66667ZM11.5 7C11.5 8.933 9.933 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7C4.5 5.067 6.067 3.5 8 3.5C9.933 3.5 11.5 5.067 11.5 7ZM12.5 7C12.5 9.48528 10.4853 11.5 8 11.5C5.51472 11.5 3.5 9.48528 3.5 7C3.5 4.51472 5.51472 2.5 8 2.5C10.4853 2.5 12.5 4.51472 12.5 7Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Header with Back Button */}
      <div className="w-full h-[60px] bg-white flex items-center justify-between px-4 border-b border-[#D9D9D9] flex-shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#404040"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-[#404040] font-['Outfit'] text-[20px] font-semibold">
          Liked Products
        </h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-20">
        <div className="px-4 py-6">
          <p className="text-gray-500 font-['Outfit'] text-[14px] mb-4">
            {displayedProducts.length} saved{" "}
            {displayedProducts.length === 1 ? "item" : "items"}
          </p>
          <div className="space-y-3">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-3 group hover:shadow-lg transition hover:scale-[1.02]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[80px] h-[80px] rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#404040] font-['Outfit'] text-[16px] font-medium truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 font-['Outfit'] text-[13px] truncate mb-2">
                    {product.producer}
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-[#45ADA1]/10 text-[#45ADA1] rounded-full text-[11px] font-['Outfit'] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-[#45ADA1] font-['Outfit'] text-[18px] font-bold">
                    {product.price}
                  </div>
                  <button
                    onClick={() => handleUnlike(product.id)}
                    className="p-2 hover:bg-red-50 rounded-full transition group/heart"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ef4444"
                      className="group-hover/heart:scale-110 transition-transform"
                    >
                      <path
                        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54869 7.04097 1.54869 8.5C1.54869 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.12087 20.84 4.61Z"
                        stroke="#ef4444"
                        strokeWidth="2"
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
      </div>
    </div>
  );
}

export default SavedPage;

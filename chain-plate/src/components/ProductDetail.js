import React, { useState } from "react";

function ProductDetail({ onBack, product }) {
  const [isLiked, setIsLiked] = useState(false);

  const productData = product || {
    name: "Mirtilos",
    price: "1.5€",
    location: "Azeitão",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b9dad5dd650644031053a73702ecbe194815e839?width=720",
    description: "This is a placeholder for where the description of this product would be.",
    certifications: [
      { id: 1, name: "Sustainable", image: "https://api.builder.io/api/v1/image/assets/TEMP/3fbd32357bd827d16e038c0e25f7be436a76f37c?width=162" },
      { id: 2, name: "Bio", image: "https://api.builder.io/api/v1/image/assets/TEMP/ad13fa015a12d635498a44f0e70053d83d1e8adb?width=152" },
      { id: 3, name: "Organic", image: "https://api.builder.io/api/v1/image/assets/TEMP/b9fbe789cae0a8949a18a0ebfdcd666420928648?width=146" },
      { id: 4, name: "Certified", image: "https://api.builder.io/api/v1/image/assets/TEMP/8a7d68c2c691110f81296c5a00ec96f2ee475801?width=126" },
    ],
    productChainImage: "https://api.builder.io/api/v1/image/assets/TEMP/169476a3bf6d6e785ea5cd7f21d7ba32cb5d02eb?width=108",
    producerImage: "https://api.builder.io/api/v1/image/assets/TEMP/05005961045084a9ef554b7d1b811fd84b182422?width=94",
    shopImage: "https://api.builder.io/api/v1/image/assets/TEMP/05fc2c41e724521274ca40fe74353c5fc1c50b58?width=104",
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full max-w-[360px] mx-auto h-screen bg-white relative flex flex-col font-outfit overflow-hidden">
      {/* Status Bar */}
      <div className="w-full h-[41px] border-b border-[#D9D9D9] bg-white flex items-center justify-between px-2 flex-shrink-0">
        <div className="flex items-center justify-center w-[58px] h-[15px]">
          <span className="font-roboto text-base font-normal text-black">16:20</span>
        </div>
        <div className="flex items-center gap-[3px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7.7998 9.25C8.35209 9.25 8.7998 9.69771 8.7998 10.25C8.7998 10.8023 8.35209 11.25 7.7998 11.25C7.24763 11.2499 6.7998 10.8022 6.7998 10.25C6.7998 9.6978 7.24763 9.25013 7.7998 9.25ZM7.70898 6C9.07307 6.00013 10.2976 6.6022 11.1299 7.55078C11.4213 7.8829 11.3888 8.38829 11.0566 8.67969C10.7245 8.97094 10.2191 8.93753 9.92773 8.60547C9.38611 7.98818 8.59319 7.59961 7.70898 7.59961H7.70801C7.28832 7.59915 6.87349 7.68911 6.49121 7.8623C6.10888 8.03557 5.76759 8.28856 5.49121 8.60449C5.20032 8.93705 4.69486 8.97058 4.3623 8.67969C4.03 8.3888 3.99641 7.88424 4.28711 7.55176C4.7138 7.06394 5.2398 6.67285 5.83008 6.40527C6.42023 6.13782 7.06106 5.9994 7.70898 6ZM7.70898 3C8.72797 2.99887 9.73665 3.20444 10.6738 3.60449C11.6114 4.00477 12.4579 4.59197 13.1621 5.3291C13.4672 5.64858 13.4562 6.15478 13.1367 6.45996C12.8172 6.76509 12.311 6.75303 12.0059 6.43359C11.4513 5.85308 10.7843 5.3914 10.0459 5.07617C9.30754 4.76095 8.51279 4.59861 7.70996 4.59961H7.70801C6.90517 4.59861 6.11044 4.76095 5.37207 5.07617C4.6337 5.3914 3.96669 5.85308 3.41211 6.43359C3.10692 6.75302 2.60072 6.7651 2.28125 6.45996C1.9618 6.15479 1.95074 5.64858 2.25586 5.3291C2.96007 4.59197 3.80656 4.00477 4.74414 3.60449C5.68102 3.20457 6.68935 2.999 7.70801 3L7.70898 3.7998V3ZM8.25391 0.0136719C10.9582 0.151339 13.3946 1.308 15.1846 3.10547C15.4963 3.41855 15.4957 3.92555 15.1826 4.2373C14.8695 4.54904 14.3625 4.54745 14.0508 4.23438C12.4293 2.60619 10.1875 1.59961 7.70898 1.59961H7.70801C6.52968 1.59807 5.36259 1.8302 4.27441 2.28223C3.18615 2.73433 2.19764 3.39828 1.36719 4.23438C1.05588 4.54738 0.549697 4.54926 0.236328 4.23828C-0.0771485 3.92692 -0.0789368 3.41992 0.232422 3.10645C1.21181 2.12041 2.37673 1.33788 3.66016 0.804688C4.9433 0.271625 6.31953 -0.00167063 7.70898 0V0.799805L7.70996 0L8.25391 0.0136719Z" fill="#222227"/>
          </svg>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M0.900391 8.86523C1.39725 8.86547 1.79978 9.31168 1.7998 9.8623V12.0781C1.7998 12.6288 1.39727 13.0759 0.900391 13.0762C0.403334 13.0762 0 12.6289 0 12.0781V9.8623C2.04809e-05 9.31153 0.403347 8.86523 0.900391 8.86523ZM7.59961 2.99219C8.09665 2.99219 8.49997 3.43849 8.5 3.98926V12.0781C8.5 12.6289 8.09667 13.0762 7.59961 13.0762C7.10271 13.076 6.7002 12.6288 6.7002 12.0781V3.98926C6.70023 3.43862 7.10273 2.99239 7.59961 2.99219ZM10.9004 0C11.3971 0.000233763 11.7996 0.446612 11.7998 0.99707V12.0781C11.7998 12.6288 11.3973 13.0759 10.9004 13.0762C10.4033 13.0762 10 12.6289 10 12.0781V0.99707C10.0002 0.446467 10.4035 0 10.9004 0ZM4.2002 5.87305C4.69704 5.87328 5.09955 6.31953 5.09961 6.87012V12.0781C5.09961 12.6288 4.69707 13.075 4.2002 13.0752C3.70314 13.0752 3.2998 12.6289 3.2998 12.0781V6.87012C3.29986 6.31938 3.70318 5.87305 4.2002 5.87305Z" fill="#222227"/>
          </svg>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.98399 4.88565C2.37174 4.41808 2.89763 4.1554 3.44599 4.1554H11.7163C12.2646 4.1554 12.7905 4.41808 13.1782 4.88565C13.566 5.35322 13.7838 5.98739 13.7838 6.64864V6.79123C14.0718 6.91403 14.3365 7.11344 14.5566 7.37889C14.9444 7.84647 15.1622 8.48063 15.1622 9.14188V10.804C15.1622 11.4653 14.9444 12.0995 14.5566 12.567C14.3365 12.8325 14.0718 13.0319 13.7838 13.1547V13.2973C13.7838 13.9585 13.566 14.5927 13.1782 15.0603C12.7905 15.5278 12.2646 15.7905 11.7163 15.7905H3.44599C2.89763 15.7905 2.37174 15.5278 1.98399 15.0603C1.59625 14.5927 1.37842 13.9585 1.37842 13.2973V6.64864C1.37842 5.98739 1.59625 5.35322 1.98399 4.88565ZM3.44599 5.81756C3.2632 5.81756 3.0879 5.90512 2.95866 6.06098C2.82941 6.21683 2.7568 6.42822 2.7568 6.64864V13.2973C2.7568 13.5177 2.82941 13.7291 2.95866 13.8849C3.0879 14.0408 3.2632 14.1284 3.44599 14.1284H11.7163C11.899 14.1284 12.0743 14.0408 12.2036 13.8849C12.3328 13.7291 12.4054 13.5177 12.4054 13.2973V12.4662C12.4054 12.0072 12.714 11.6351 13.0946 11.6351C13.2774 11.6351 13.4527 11.5476 13.582 11.3917C13.7112 11.2358 13.7838 11.0245 13.7838 10.804V9.14188C13.7838 8.92147 13.7112 8.71008 13.582 8.55422C13.4527 8.39836 13.2774 8.3108 13.0946 8.3108C12.714 8.3108 12.4054 7.93871 12.4054 7.47972V6.64864C12.4054 6.42822 12.3328 6.21683 12.2036 6.06098C12.0743 5.90512 11.899 5.81756 11.7163 5.81756H3.44599ZM4.82436 7.47972C5.20499 7.47972 5.51355 7.85181 5.51355 8.3108V11.6351C5.51355 12.0941 5.20499 12.4662 4.82436 12.4662C4.44374 12.4662 4.13517 12.0941 4.13517 11.6351V8.3108C4.13517 7.85181 4.44374 7.47972 4.82436 7.47972ZM7.58112 7.47972C7.96175 7.47972 8.27031 7.85181 8.27031 8.3108V11.6351C8.27031 12.0941 7.96175 12.4662 7.58112 12.4662C7.20049 12.4662 6.89193 12.0941 6.89193 11.6351V8.3108C6.89193 7.85181 7.20049 7.47972 7.58112 7.47972ZM10.3379 7.47972C10.7185 7.47972 11.0271 7.85181 11.0271 8.3108V11.6351C11.0271 12.0941 10.7185 12.4662 10.3379 12.4662C9.95725 12.4662 9.64869 12.0941 9.64869 11.6351V8.3108C9.64869 7.85181 9.95725 7.47972 10.3379 7.47972Z" fill="#222227"/>
          </svg>
        </div>
      </div>

      {/* Top Bar with Title and Back Button */}
      <div className="w-full h-[45px] bg-[#45ADA1] flex items-center justify-center relative" style={{ filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))' }}>
        <button
          onClick={onBack}
          className="absolute left-[14px] top-1/2 -translate-y-1/2"
        >
          <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
            <path d="M14.0054 10.9641C14.0044 10.6223 14.1903 10.291 14.5308 10.0279L25.9535 1.25117C26.3413 0.952538 26.8985 0.764648 27.5026 0.728906C28.1067 0.693164 28.7082 0.812695 29.1747 1.06102C29.6412 1.30935 29.9346 1.66611 29.9903 2.05293C30.046 2.43975 29.8595 2.82484 29.4717 3.12347L19.237 10.9641L29.1062 18.8046C29.2959 18.9542 29.4377 19.1264 29.5232 19.3112C29.6087 19.496 29.6363 19.6898 29.6045 19.8814C29.5726 20.0731 29.4819 20.2588 29.3376 20.428C29.1933 20.5971 28.9982 20.7464 28.7635 20.8671C28.5286 21.001 28.253 21.1025 27.954 21.1651C27.655 21.2277 27.3391 21.2501 27.026 21.2309C26.7128 21.2116 26.4093 21.1512 26.1343 21.0534C25.8594 20.9555 25.6189 20.8224 25.4281 20.6623L14.3938 11.8856C14.107 11.6149 13.9703 11.2904 14.0054 10.9641Z" fill="white"/>
          </svg>
        </button>
        <h1 className="font-outfit text-[32px] font-medium text-white tracking-[-0.24px]">
          {productData.name}
        </h1>
        <div className="absolute right-[13px] top-1/2 -translate-y-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3f8fa29d17b0a18348b3695d08021fa2d1379c1f?width=64"
            alt="Blockchain"
            className="w-[32px] h-[32px]"
          />
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Image */}
        <div className="w-full h-[160px] relative">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Price and Location */}
        <div className="flex items-center justify-between px-[17px] mt-[12px]">
          <div className="font-outfit text-[24px] font-medium text-black tracking-[-0.24px]">
            {productData.price}
          </div>
          <div className="flex items-center gap-[2px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="#1D1B20"/>
            </svg>
            <span className="font-outfit text-[20px] font-medium text-black tracking-[-0.24px]">
              {productData.location}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-[9px] px-[23px] mt-[9px]">
          <button className="relative w-[97px] h-[45px] rounded-[7px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-white"></div>
            <img
              src={productData.productChainImage}
              alt=""
              className="absolute right-0 top-0 w-[54px] h-full object-cover opacity-66"
            />
            <span className="absolute left-[8px] top-[3px] w-[81px] h-[40px] font-outfit text-[16px] font-medium text-black tracking-[-0.24px] flex items-center">
              Product Chain
            </span>
          </button>

          <button className="relative w-[98px] h-[45px] rounded-[7px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-white"></div>
            <img
              src={productData.producerImage}
              alt=""
              className="absolute right-0 top-0 w-[47px] h-full object-cover opacity-62 rounded-r-[9px]"
            />
            <span className="absolute left-[8px] top-1/2 -translate-y-1/2 font-outfit text-[16px] font-medium text-black tracking-[-0.24px]">
              Producer
            </span>
          </button>

          <button className="relative w-[98px] h-[45px] rounded-[7px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="absolute inset-0 bg-white"></div>
            <img
              src={productData.shopImage}
              alt=""
              className="absolute right-0 top-0 w-[52px] h-full object-cover opacity-61 rounded-r-[10px]"
            />
            <span className="absolute left-[9px] top-1/2 -translate-y-1/2 font-outfit text-[16px] font-medium text-black tracking-[-0.24px]">
              Shop
            </span>
          </button>
        </div>

        {/* Certification Badges */}
        <div className="flex items-center gap-[5px] px-[15px] mt-[14px]">
          {productData.certifications.map((cert) => (
            <img
              key={cert.id}
              src={cert.image}
              alt={cert.name}
              className="w-[81px] h-[82px] object-contain"
            />
          ))}
        </div>

        {/* Description */}
        <div className="mx-[16px] mt-[7px] mb-[20px]">
          <div className="w-full bg-[#E8F5F3] rounded-[7px] px-[13px] py-[11px]">
            <p className="font-outfit text-[22px] font-normal text-black tracking-[-0.24px] leading-normal">
              {productData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Like Button */}
      <button
        onClick={handleLikeClick}
        className="absolute right-[21px] top-[218px] w-[36px] h-[36px] rounded-full bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center hover:scale-110 transition-transform z-10"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M22.1999 10.8577C21.6105 10.2681 20.9108 9.80036 20.1407 9.48125C19.3705 9.16214 18.545 8.99789 17.7114 8.99789C16.8778 8.99789 16.0523 9.16214 15.2821 9.48125C14.512 9.80036 13.8123 10.2681 13.2229 10.8577L11.9999 12.0808L10.7768 10.8577C9.58637 9.66728 7.97177 8.99851 6.28833 8.99851C4.60489 8.99851 2.99029 9.66728 1.79985 10.8577C0.609409 12.0481 -0.0593262 13.6627 -0.0593262 15.3462C-0.0593262 17.0297 0.609409 18.6442 1.79985 19.8346L11.9999 30.0346L22.1999 19.8346C22.7895 19.2453 23.2572 18.5456 23.5763 17.7754C23.8954 17.0053 24.0597 16.1798 24.0597 15.3462C24.0597 14.5125 23.8954 13.687 23.5763 12.9169C23.2572 12.1468 22.7895 11.447 22.1999 10.8577Z"
            stroke={isLiked ? "#ef4444" : "#1E1E1E"}
            fill={isLiked ? "#ef4444" : "none"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductDetail;

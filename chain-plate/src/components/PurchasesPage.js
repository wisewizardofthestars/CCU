import React from "react";

function PurchasesPage({ onBack, pastPurchases = [] }) {
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
          Past Purchases
        </h1>
        <div className="w-10"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-[#F5F5F5] pb-20">
        <div className="px-4 py-6">
          <p className="text-gray-500 font-['Outfit'] text-[14px] mb-4">
            {pastPurchases.length} total{" "}
            {pastPurchases.length === 1 ? "purchase" : "purchases"}
          </p>
          <div className="space-y-3">
            {pastPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-3 group hover:shadow-lg transition hover:scale-[1.02]"
              >
                <img
                  src={purchase.image}
                  alt={purchase.name}
                  className="w-[80px] h-[80px] rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#404040] font-['Outfit'] text-[16px] font-medium truncate">
                    {purchase.name}
                  </h3>
                  <p className="text-gray-500 font-['Outfit'] text-[13px] truncate">
                    {purchase.producer}
                  </p>
                  <p className="text-gray-400 font-['Outfit'] text-[12px] mt-1">
                    {purchase.date}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[11px] text-green-700 font-['Outfit'] font-medium">
                      {purchase.status}
                    </span>
                  </div>
                </div>
                <div className="text-[#45ADA1] font-['Outfit'] text-[18px] font-bold">
                  {purchase.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full h-[70px] border-t border-[#E8E8E8] bg-white/95 backdrop-blur-md flex items-center justify-around px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0 z-20">
        <button className="flex flex-col items-center gap-1 hover:scale-110 transition">
          <svg width="28" height="28" viewBox="0 0 28 32" fill="none">
            <path
              d="M1 10.7388V30.2388H9.5V25.2388V18.7388H18.5V24.7388V30.2388H27V10.7388L13.5 1.23877L1 10.7388Z"
              stroke="#8E8E8E"
              strokeWidth="2"
            />
          </svg>
          <span className="text-[10px] text-gray-400 font-['Outfit']">
            Home
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 hover:scale-110 transition">
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
              d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-[#8E8E8E] font-['Outfit']">
            Map
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="#8E8E8E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] text-[#8E8E8E] font-['Outfit']">
            Rewards
          </span>
        </button>
      </div>
    </div>
  );
}

export default PurchasesPage;

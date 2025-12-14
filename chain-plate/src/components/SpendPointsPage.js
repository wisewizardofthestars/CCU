import React from "react";

function SpendPointsPage({ onBack, onNavigateToHome, onNavigateToMap, onNavigateToSaved }) {
  const currentPoints = 100;

  return (
    <div className="w-full max-w-[360px] mx-auto h-screen bg-white relative flex flex-col overflow-hidden">
      <div className="w-full h-[37px] border-b border-[#D9D9D9] bg-white flex items-center justify-between px-2 flex-shrink-0 z-20">
        <div className="text-base font-roboto text-black">16:20</div>
        <div className="flex items-center gap-[5px]">
          <svg width="15" height="11" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.7998 9.25C8.35209 9.25 8.7998 9.69771 8.7998 10.25C8.7998 10.8023 8.35209 11.25 7.7998 11.25C7.24763 11.2499 6.7998 10.8022 6.7998 10.25C6.7998 9.6978 7.24763 9.25013 7.7998 9.25ZM7.70898 6C9.07307 6.00013 10.2976 6.6022 11.1299 7.55078C11.4213 7.8829 11.3888 8.38829 11.0566 8.67969C10.7245 8.97094 10.2191 8.93753 9.92773 8.60547C9.38611 7.98818 8.59319 7.59961 7.70898 7.59961H7.70801C7.28832 7.59915 6.87349 7.68911 6.49121 7.8623C6.10888 8.03557 5.76759 8.28856 5.49121 8.60449C5.20032 8.93705 4.69486 8.97058 4.3623 8.67969C4.03 8.3888 3.99641 7.88424 4.28711 7.55176C4.7138 7.06394 5.2398 6.67285 5.83008 6.40527C6.42023 6.13782 7.06106 5.9994 7.70898 6ZM7.70898 3C8.72797 2.99887 9.73665 3.20444 10.6738 3.60449C11.6114 4.00477 12.4579 4.59197 13.1621 5.3291C13.4672 5.64858 13.4562 6.15478 13.1367 6.45996C12.8172 6.76509 12.311 6.75303 12.0059 6.43359C11.4513 5.85308 10.7843 5.3914 10.0459 5.07617C9.30754 4.76095 8.51279 4.59861 7.70996 4.59961H7.70801C6.90517 4.59861 6.11044 4.76095 5.37207 5.07617C4.6337 5.3914 3.96669 5.85308 3.41211 6.43359C3.10692 6.75302 2.60072 6.7651 2.28125 6.45996C1.9618 6.15479 1.95074 5.64858 2.25586 5.3291C2.96007 4.59197 3.80656 4.00477 4.74414 3.60449C5.68102 3.20457 6.68935 2.999 7.70801 3L7.70898 3.7998V3ZM8.25391 0.0136719C10.9582 0.151339 13.3946 1.308 15.1846 3.10547C15.4963 3.41855 15.4957 3.92555 15.1826 4.2373C14.8695 4.54904 14.3625 4.54745 14.0508 4.23438C12.4293 2.60619 10.1875 1.59961 7.70898 1.59961H7.70801C6.52968 1.59807 5.36259 1.8302 4.27441 2.28223C3.18615 2.73433 2.19764 3.39828 1.36719 4.23438C1.05588 4.54738 0.549697 4.54926 0.236328 4.23828C-0.0771485 3.92692 -0.0789368 3.41992 0.232422 3.10645C1.21181 2.12041 2.37673 1.33788 3.66016 0.804688C4.9433 0.271625 6.31953 -0.00167063 7.70898 0V0.799805L7.70996 0L8.25391 0.0136719Z" fill="#222227"/>
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.900391 8C1.39727 8.00021 1.7998 8.40346 1.7998 8.90039V10.9004C1.79959 11.3971 1.39714 11.7996 0.900391 11.7998C0.403465 11.7998 0.000210992 11.3973 0 10.9004V8.90039C0 8.40333 0.403334 8 0.900391 8ZM4.2002 5.2998C4.69707 5.30002 5.09961 5.70327 5.09961 6.2002V10.8994C5.09961 11.3963 4.69707 11.7996 4.2002 11.7998C3.70314 11.7998 3.2998 11.3965 3.2998 10.8994V6.2002C3.2998 5.70314 3.70314 5.2998 4.2002 5.2998ZM7.59961 2.7002C8.09655 2.7002 8.49981 3.10271 8.5 3.59961V10.9004C8.49976 11.3972 8.09652 11.7998 7.59961 11.7998C7.10286 11.7996 6.70043 11.3971 6.7002 10.9004V3.59961C6.70038 3.10282 7.10282 2.70038 7.59961 2.7002ZM10.9004 0C11.3973 0.000211056 11.7998 0.403465 11.7998 0.900391V10.9004C11.7996 11.3971 11.3971 11.7996 10.9004 11.7998C10.4035 11.7998 10.0002 11.3973 10 10.9004V0.900391C10 0.403334 10.4033 0 10.9004 0Z" fill="#222227"/>
          </svg>
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.98399 4.40901C2.37174 3.98705 2.89763 3.75 3.44599 3.75H11.7163C12.2646 3.75 12.7905 3.98705 13.1782 4.40901C13.566 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3365 6.41946 14.5566 6.65901C14.9444 7.08097 15.1622 7.65326 15.1622 8.25V9.75C15.1622 10.3467 14.9444 10.919 14.5566 11.341C14.3365 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.566 13.169 13.1782 13.591C12.7905 14.0129 12.2646 14.25 11.7163 14.25H3.44599C2.89763 14.25 2.37174 14.0129 1.98399 13.591C1.59625 13.169 1.37842 12.5967 1.37842 12V6C1.37842 5.40326 1.59625 4.83097 1.98399 4.40901ZM3.44599 5.25C3.2632 5.25 3.0879 5.32902 2.95866 5.46967C2.82941 5.61032 2.7568 5.80109 2.7568 6V12C2.7568 12.1989 2.82941 12.3897 2.95866 12.5303C3.0879 12.671 3.2632 12.75 3.44599 12.75H11.7163C11.899 12.75 12.0743 12.671 12.2036 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.714 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.582 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.582 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.714 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2036 5.46967C12.0743 5.32902 11.899 5.25 11.7163 5.25H3.44599ZM4.82436 6.75C5.20499 6.75 5.51355 7.08579 5.51355 7.5V10.5C5.51355 10.9142 5.20499 11.25 4.82436 11.25C4.44374 11.25 4.13517 10.9142 4.13517 10.5V7.5C4.13517 7.08579 4.44374 6.75 4.82436 6.75ZM7.58112 6.75C7.96175 6.75 8.27031 7.08579 8.27031 7.5V10.5C8.27031 10.9142 7.96175 11.25 7.58112 11.25C7.20049 11.25 6.89193 10.9142 6.89193 10.5V7.5C6.89193 7.08579 7.20049 6.75 7.58112 6.75ZM10.3379 6.75C10.7185 6.75 11.0271 7.08579 11.0271 7.5V10.5C11.0271 10.9142 10.7185 11.25 10.3379 11.25C9.95725 11.25 9.64869 10.9142 9.64869 10.5V7.5C9.64869 7.08579 9.95725 6.75 10.3379 6.75Z" fill="#222227"/>
          </svg>
        </div>
      </div>

      <div className="w-full h-[36px] flex items-center justify-between px-4 relative z-10 mt-[1px]">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/174f2e34719a433b4b7920c6aed99c6546b69585?width=54" 
          alt="Logo" 
          className="w-[27px] h-[29px]"
        />
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7afd82231cccc6224f976d8098ce4cb4ce364478?width=50" 
          alt="Notification" 
          className="w-[25px] h-[25px]"
        />
        <button className="w-[32px] h-[32px] rounded-full bg-white border-2 border-black flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <circle cx="16" cy="14" r="4" fill="black"/>
            <path d="M25 27.091C25 31.3084 16 32 16 32C16 32 7 31.8538 7 27.6364C7 23.419 8.6875 20 16 20C22.75 20 25 22.8735 25 27.091Z" fill="black"/>
          </svg>
        </button>
      </div>

      <div className="absolute top-[-145px] left-[-45px] w-[450px] h-[450px] rounded-full bg-[#45ADA1] opacity-45 z-0"></div>

      <div className="flex-1 relative z-10 flex flex-col items-center pt-12">
        <div className="text-black text-center font-outfit text-[15px] font-normal tracking-[-0.24px]">
          You currently have:
        </div>

        <div className="text-[#FFD559] text-center font-outfit text-[64px] font-bold tracking-[-0.24px] leading-none mt-2"
             style={{WebkitTextStroke: '1px black'}}>
          {currentPoints}
        </div>

        <div className="text-black text-center font-outfit text-[15px] font-normal tracking-[-0.24px] mt-1">
          Chainies
        </div>

        <div className="mt-8">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/bc1419c369230a903b654302fbae830f1d94574d?width=236" 
            alt="Chainies Coin" 
            className="w-[118px] h-[64px]"
          />
        </div>

        <button className="absolute top-[44px] right-[25px] w-[35px] h-[35px] flex items-center justify-center">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path d="M16.0415 11.6667C16.0415 11.2799 16.1952 10.909 16.4686 10.6355C16.7421 10.362 17.1131 10.2084 17.4998 10.2084C17.7533 10.2139 18.0009 10.2854 18.2183 10.4158C18.4357 10.5463 18.6153 10.7311 18.7394 10.9521C18.8793 11.1644 18.9552 11.4125 18.9582 11.6667C18.9582 12.0535 18.8045 12.4244 18.531 12.6979C18.2576 12.9714 17.8866 13.125 17.4998 13.125C17.1131 13.125 16.7421 12.9714 16.4686 12.6979C16.1952 12.4244 16.0415 12.0535 16.0415 11.6667ZM32.0832 17.5C32.0832 20.3843 31.2279 23.2039 29.6254 25.6021C28.023 28.0003 25.7454 29.8695 23.0806 30.9733C20.4159 32.077 17.4837 32.3658 14.6548 31.8031C11.8259 31.2404 9.22739 29.8515 7.18787 27.812C5.14835 25.7725 3.75943 23.174 3.19673 20.3451C2.63402 17.5162 2.92282 14.584 4.0266 11.9192C5.13038 9.25446 6.99956 6.97686 9.39778 5.37442C11.796 3.77198 14.6155 2.91669 17.4998 2.91669C19.415 2.91669 21.3113 3.2939 23.0806 4.02678C24.85 4.75966 26.4576 5.83386 27.8118 7.18805C29.166 8.54223 30.2402 10.1499 30.9731 11.9192C31.706 13.6885 32.0832 15.5849 32.0832 17.5ZM29.1665 17.5C29.1665 15.1926 28.4823 12.9369 27.2003 11.0184C25.9184 9.09979 24.0963 7.60445 21.9645 6.72143C19.8327 5.8384 17.4869 5.60736 15.2238 6.05753C12.9607 6.50769 10.8819 7.61883 9.25026 9.25044C7.61865 10.8821 6.50751 12.9609 6.05735 15.224C5.60719 17.4871 5.83823 19.8329 6.72125 21.9647C7.60427 24.0965 9.09962 25.9185 11.0182 27.2005C12.9368 28.4824 15.1924 29.1667 17.4998 29.1667C20.594 29.1667 23.5615 27.9375 25.7494 25.7496C27.9373 23.5617 29.1665 20.5942 29.1665 17.5ZM18.9582 20.4167V16.0417C18.9582 15.6549 18.8045 15.284 18.531 15.0105C18.2576 14.737 17.8866 14.5834 17.4998 14.5834H16.0415C15.6547 14.5834 15.2838 14.737 15.0103 15.0105C14.7368 15.284 14.5832 15.6549 14.5832 16.0417C14.5832 16.4285 14.7368 16.7994 15.0103 17.0729C15.2838 17.3464 15.6547 17.5 16.0415 17.5V21.875C16.0415 22.2618 16.1952 22.6327 16.4686 22.9062C16.7421 23.1797 17.1131 23.3334 17.4998 23.3334H18.9582C19.345 23.3334 19.7159 23.1797 19.9894 22.9062C20.2629 22.6327 20.4165 22.2618 20.4165 21.875C20.4165 21.4882 20.2629 21.1173 19.9894 20.8438C19.7159 20.5703 19.345 20.4167 18.9582 20.4167Z" fill="black"/>
          </svg>
        </button>

        <div className="absolute bottom-[100px] left-0 right-0 px-[42px] flex justify-between gap-6">
          <div className="relative w-[120px] h-[120px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4d6dd77a1d6afd225a94a7d1bcb895be1365030a?width=182" 
              alt="Spend" 
              className="w-[91px] h-[87px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[28px] flex items-center justify-center">
              <span className="text-white text-center font-outfit text-[15px] font-bold tracking-[-0.24px]">
                Spend
              </span>
            </div>
          </div>

          <div className="relative w-[120px] h-[120px] rounded-[10px] overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1adce37855817ceab4224854205d5c01260c9698?width=104" 
                alt="Card 1" 
                className="absolute w-[52px] h-[58px] left-[4px] top-[24px]"
                style={{transform: 'rotate(-17.63deg)'}}
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/8e2cb6bfe5f335c01d255355e5b7278f54c10938?width=112" 
                alt="Card 2" 
                className="absolute w-[56px] h-[61px] left-[30px] top-[11px]"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/12cfaf969880fdd3dc54366c5f90628ccb73b178?width=104" 
                alt="Card 3" 
                className="absolute w-[52px] h-[57px] left-[50px] top-[32px]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[28px] flex items-center justify-center">
              <span className="text-white text-center font-outfit text-[15px] font-bold tracking-[-0.24px]">
                Collection
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[74px] border-t border-[#D9D9D9] bg-white flex items-end justify-around pb-[10px] flex-shrink-0 z-20">
        <div className="absolute top-[-15px] right-[41px] w-[81px] h-[81px] bg-white rounded-full border border-[#D9D9D9] z-10"></div>
        
        <button 
          onClick={onNavigateToHome}
          className="flex flex-col items-center gap-1 hover:scale-110 transition relative z-20"
        >
          <svg width="26" height="29" viewBox="0 0 28 32" fill="none">
            <path d="M1 10.7388V30.2388H9.5V25.2388V18.7388H18.5V24.7388V30.2388H27V10.7388L13.5 1.23877L1 10.7388Z" stroke="black" strokeWidth="2"/>
          </svg>
        </button>

        <button 
          onClick={onNavigateToMap}
          className="flex flex-col items-center gap-1 hover:scale-110 transition relative z-20"
        >
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M10.3332 23.25L1.2915 28.4167V7.75001L10.3332 2.58334M10.3332 23.25L20.6665 28.4167M10.3332 23.25V2.58334M20.6665 28.4167L29.7082 23.25V2.58334L20.6665 7.75001M20.6665 28.4167V7.75001M20.6665 7.75001L10.3332 2.58334" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="flex flex-col items-center relative z-20">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/60d350ee173a7f51de74714ca7afa652e5ec2400?width=120" 
            alt="Scan" 
            className="w-[60px] h-[60px] mb-[-10px]"
          />
          <span className="text-black text-center font-inter text-[12px] font-normal tracking-[-0.24px]">
            SCAN
          </span>
        </button>

        <button 
          onClick={onNavigateToSaved}
          className="flex flex-col items-center gap-1 hover:scale-110 transition relative z-20"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L16 28.3067L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52619C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex flex-col items-center relative z-20">
          <div className="relative">
            <div className="w-[50px] h-[50px] rounded-full bg-[#45ADA1] opacity-45 absolute top-[-5px] left-[-5px] shadow-lg"></div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4b5159ceea765f0622228dd0ff5afbe8585278e9?width=80" 
              alt="Points" 
              className="w-[40px] h-[40px] relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpendPointsPage;

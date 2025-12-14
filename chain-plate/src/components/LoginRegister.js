import React from "react";

function LoginRegister({ onLoginClick, onRegisterClick }) {
  return (
    <div className="relative w-[360px] h-[640px] mx-auto bg-white">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-full h-[37px] bg-white border-b border-[#D9D9D9] flex items-center justify-between px-2">
        {/* Time */}
        <div className="flex items-center justify-center w-[58px] h-[15px] ml-[6px] mt-[8px]">
          <span
            className="text-black text-center text-[16px] font-normal tracking-[-0.24px]"
            style={{
              fontFamily: "Roboto, -apple-system, Helvetica, sans-serif",
            }}
          >
            16:20
          </span>
        </div>

        {/* Status Icons */}
        <div className="flex items-center gap-[3px] mt-[8px] mr-[8px]">
          {/* Wifi Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.2742 2.28256C5.36246 1.83046 6.52952 1.59847 7.70796 1.60001L7.709 1.60001C10.1877 1.60001 12.4296 2.60635 14.0511 4.23474C14.3629 4.54782 14.8694 4.5489 15.1825 4.23714C15.4956 3.92538 15.4966 3.41885 15.1849 3.10577C13.2755 1.18828 10.6306 0.000149587 7.70952 8.26482e-06L7.71004 8.92047e-06L7.709 0.800008V8.20521e-06L7.70952 8.26482e-06C6.31989 -0.00173356 4.94367 0.271861 3.66037 0.804993C2.3769 1.33819 1.21181 2.12042 0.2324 3.10649C-0.0789582 3.41997 -0.0772414 3.9265 0.236235 4.23786C0.549712 4.54922 1.05624 4.5475 1.3676 4.23402C2.19805 3.39792 3.18594 2.73466 4.2742 2.28256ZM5.3721 5.07626C6.11047 4.76103 6.90516 4.59901 7.70801 4.60001H7.70999C8.51284 4.59901 9.30753 4.76103 10.0459 5.07626C10.7843 5.39149 11.451 5.85336 12.0055 6.43388C12.3107 6.75335 12.8171 6.76492 13.1366 6.45971C13.4561 6.15451 13.4677 5.64811 13.1625 5.32864C12.4583 4.5915 11.6117 4.00503 10.6741 3.60475C9.73685 3.20461 8.72811 2.99888 7.709 3.00001L7.70999 3.00001L7.709 3.80001L7.70801 3.00001L7.709 3.00001C6.68989 2.99888 5.68115 3.20461 4.74388 3.60475C3.8063 4.00503 2.95975 4.5915 2.25554 5.32864C1.95034 5.64811 1.96191 6.15451 2.28138 6.45971C2.60086 6.76492 3.10725 6.75335 3.41246 6.43388C3.96704 5.85336 4.63372 5.39149 5.3721 5.07626ZM6.49081 7.86225C6.87321 7.68896 7.28827 7.59954 7.7081 7.60001L7.709 7.60001C8.59323 7.60001 9.38603 7.98831 9.92765 8.60563C10.219 8.93774 10.7245 8.97075 11.0566 8.67935C11.3887 8.38796 11.4217 7.8825 11.1303 7.55039C10.2981 6.60181 9.07354 6.00014 7.70945 6.00001L7.7099 6.00001L7.709 6.80001V6.00001H7.70945C7.06137 5.99934 6.42066 6.13741 5.83036 6.40492C5.23993 6.6725 4.71363 7.06339 4.28685 7.5513C3.99596 7.88386 4.02974 8.38927 4.3623 8.68016C4.69485 8.97105 5.20026 8.93727 5.49115 8.60471C5.76756 8.28871 6.10842 8.03555 6.49081 7.86225ZM8.80005 10.25C8.80005 10.8023 8.35233 11.25 7.80005 11.25C7.24776 11.25 6.80005 10.8023 6.80005 10.25C6.80005 9.69771 7.24776 9.25 7.80005 9.25C8.35233 9.25 8.80005 9.69771 8.80005 10.25Z"
              fill="#222227"
            />
          </svg>

          {/* Signal Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8 3.9C14.8 3.40294 14.3971 3 13.9 3C13.4029 3 13 3.40294 13 3.9V13.9C13 14.3971 13.4029 14.8 13.9 14.8C14.3971 14.8 14.8 14.3971 14.8 13.9V3.9ZM8.0998 9.1998C8.0998 8.70275 7.69686 8.2998 7.1998 8.2998C6.70275 8.2998 6.2998 8.70275 6.2998 9.1998V13.8998C6.2998 14.3969 6.70275 14.7998 7.1998 14.7998C7.69686 14.7998 8.0998 14.3969 8.0998 13.8998V9.1998ZM3.9 11C4.39706 11 4.8 11.4029 4.8 11.9V13.9C4.8 14.3971 4.39706 14.8 3.9 14.8C3.40294 14.8 3 14.3971 3 13.9V11.9C3 11.4029 3.40294 11 3.9 11ZM11.5 6.59995C11.5 6.10289 11.097 5.69995 10.6 5.69995C10.1029 5.69995 9.69995 6.10289 9.69995 6.59995V13.9C9.69995 14.397 10.1029 14.8 10.6 14.8C11.097 14.8 11.5 14.397 11.5 13.9V6.59995Z"
              fill="#222227"
            />
          </svg>

          {/* Battery Icon */}
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
              d="M1.98393 4.40901C2.37168 3.98705 2.89757 3.75 3.44592 3.75H11.7162C12.2645 3.75 12.7904 3.98705 13.1782 4.40901C13.5659 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3364 6.41946 14.5566 6.65901C14.9443 7.08097 15.1621 7.65326 15.1621 8.25V9.75C15.1621 10.3467 14.9443 10.919 14.5566 11.341C14.3364 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.5659 13.169 13.1782 13.591C12.7904 14.0129 12.2645 14.25 11.7162 14.25H3.44592C2.89757 14.25 2.37168 14.0129 1.98393 13.591C1.59619 13.169 1.37836 12.5967 1.37836 12V6C1.37836 5.40326 1.59619 4.83097 1.98393 4.40901ZM3.44592 5.25C3.26314 5.25 3.08784 5.32902 2.95859 5.46967C2.82935 5.61032 2.75674 5.80109 2.75674 6V12C2.75674 12.1989 2.82935 12.3897 2.95859 12.5303C3.08784 12.671 3.26314 12.75 3.44592 12.75H11.7162C11.899 12.75 12.0743 12.671 12.2035 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.7139 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.5819 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.5819 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.7139 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2035 5.46967C12.0743 5.32902 11.899 5.25 11.7162 5.25H3.44592ZM4.8243 6.75C5.20493 6.75 5.51349 7.08579 5.51349 7.5V10.5C5.51349 10.9142 5.20493 11.25 4.8243 11.25C4.44367 11.25 4.13511 10.9142 4.13511 10.5V7.5C4.13511 7.08579 4.44367 6.75 4.8243 6.75ZM7.58106 6.75C7.96169 6.75 8.27025 7.08579 8.27025 7.5V10.5C8.27025 10.9142 7.96169 11.25 7.58106 11.25C7.20043 11.25 6.89187 10.9142 6.89187 10.5V7.5C6.89187 7.08579 7.20043 6.75 7.58106 6.75ZM10.3378 6.75C10.7184 6.75 11.027 7.08579 11.027 7.5V10.5C11.027 10.9142 10.7184 11.25 10.3378 11.25C9.95719 11.25 9.64863 10.9142 9.64863 10.5V7.5C9.64863 7.08579 9.95719 6.75 10.3378 6.75Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute left-[80px] top-[120px] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#45ADA1]/10 to-[#45ADA1]/5 blur-2xl"></div>

      {/* ChainPlate Title */}
      <div className="absolute left-[5px] top-[180px] w-[350px] h-[80px]">
        <h1
          className="text-black text-center text-[64px] font-normal tracking-[-0.24px]"
          style={{
            fontFamily: "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          ChainPlate
        </h1>
      </div>

      {/* Tagline */}
      <div className="absolute left-[30px] top-[265px] w-[300px]">
        <p
          className="text-[#45ADA1] text-center text-[14px] font-medium tracking-[-0.24px]"
          style={{
            fontFamily: "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 500,
          }}
        >
          Track your food from farm to table
        </p>
      </div>

      {/* Icon/Illustration */}
      <div className="absolute left-[130px] top-[310px] w-[100px] h-[100px] flex items-center justify-center">
        <div className="relative">
          {/* Blockchain icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="#45ADA1"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            <rect
              x="26"
              y="16"
              width="28"
              height="28"
              rx="4"
              fill="#45ADA1"
              opacity="0.15"
            />
            <rect
              x="26"
              y="36"
              width="28"
              height="28"
              rx="4"
              fill="#45ADA1"
              opacity="0.25"
            />
            <path
              d="M40 30L40 50"
              stroke="#45ADA1"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="40" cy="30" r="4" fill="#45ADA1" />
            <circle cx="40" cy="50" r="4" fill="#45ADA1" />
          </svg>
        </div>
      </div>

      {/* Login Button */}
      <div className="absolute left-[80px] top-[440px] w-[200px] h-[44px]">
        <button
          onClick={onLoginClick}
          className="w-full h-full rounded-[12px] border-[0.6px] border-[rgba(69,173,161,0.45)] shadow-[0_4px_12px_0_rgba(69,173,161,0.25)] flex items-center justify-center transition-all hover:shadow-[0_6px_16px_0_rgba(69,173,161,0.35)] hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#45ADA1" }}
        >
          <span
            className="text-white text-[20px] font-medium"
            style={{
              fontFamily:
                "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 500,
            }}
          >
            Login
          </span>
        </button>
      </div>

      {/* Register Button */}
      <div className="absolute left-[80px] top-[500px] w-[200px] h-[44px]">
        <button
          onClick={onRegisterClick}
          className="w-full h-full rounded-[12px] border-2 border-[#45ADA1] flex items-center justify-center transition-all hover:bg-[#45ADA1]/5 hover:scale-105 active:scale-95"
          style={{ backgroundColor: "white" }}
        >
          <span
            className="text-[#45ADA1] text-[20px] font-medium"
            style={{
              fontFamily:
                "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 500,
            }}
          >
            Register
          </span>
        </button>
      </div>

      {/* Bottom decorative text */}
      <div className="absolute left-[30px] bottom-[40px] w-[300px]">
        <p
          className="text-gray-400 text-center text-[11px] font-normal tracking-[-0.24px]"
          style={{ fontFamily: "Roboto, -apple-system, Helvetica, sans-serif" }}
        >
          Secure · Transparent · Verified
        </p>
      </div>
    </div>
  );
}

export default LoginRegister;

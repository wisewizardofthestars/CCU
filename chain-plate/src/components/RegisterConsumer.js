import React, { useState } from "react";

const RegisterConsumer = ({ onBack, onLoginClick }) => {
  const [isConsumer, setIsConsumer] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log("Register:", formData);
  };

  return (
    <div className="relative w-[360px] h-[640px] mx-auto bg-white">
      {/* Status Bar */}
      <div className="absolute left-0 top-0 w-full h-[37px] bg-white border-b border-[#D9D9D9] flex items-center justify-between px-2">
        {/* Time */}
        <div className="flex items-center justify-center w-[58px] h-[15px] ml-[6px] mt-[8px]">
          <span
            className="text-black text-center text-[16px] font-normal tracking-[-0.24px]"
            style={{ fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif" }}
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
              d="M1.98399 4.40901C2.37174 3.98705 2.89763 3.75 3.44599 3.75H11.7163C12.2646 3.75 12.7905 3.98705 13.1782 4.40901C13.566 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3365 6.41946 14.5566 6.65901C14.9444 7.08097 15.1622 7.65326 15.1622 8.25V9.75C15.1622 10.3467 14.9444 10.919 14.5566 11.341C14.3365 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.566 13.169 13.1782 13.591C12.7905 14.0129 12.2646 14.25 11.7163 14.25H3.44599C2.89763 14.25 2.37174 14.0129 1.98399 13.591C1.59625 13.169 1.37842 12.5967 1.37842 12V6C1.37842 5.40326 1.59625 4.83097 1.98399 4.40901ZM3.44599 5.25C3.2632 5.25 3.0879 5.32902 2.95866 5.46967C2.82941 5.61032 2.7568 5.80109 2.7568 6V12C2.7568 12.1989 2.82941 12.3897 2.95866 12.5303C3.0879 12.671 3.2632 12.75 3.44599 12.75H11.7163C11.899 12.75 12.0743 12.671 12.2036 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.714 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.582 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.582 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.714 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2036 5.46967C12.0743 5.32902 11.899 5.25 11.7163 5.25H3.44599ZM4.82436 6.75C5.20499 6.75 5.51355 7.08579 5.51355 7.5V10.5C5.51355 10.9142 5.20499 11.25 4.82436 11.25C4.44374 11.25 4.13517 10.9142 4.13517 10.5V7.5C4.13517 7.08579 4.44374 6.75 4.82436 6.75ZM7.58112 6.75C7.96175 6.75 8.27031 7.08579 8.27031 7.5V10.5C8.27031 10.9142 7.96175 11.25 7.58112 11.25C7.20049 11.25 6.89193 10.9142 6.89193 10.5V7.5C6.89193 7.08579 7.20049 6.75 7.58112 6.75ZM10.3379 6.75C10.7185 6.75 11.0271 7.08579 11.0271 7.5V10.5C11.0271 10.9142 10.7185 11.25 10.3379 11.25C9.95725 11.25 9.64869 10.9142 9.64869 10.5V7.5C9.64869 7.08579 9.95725 6.75 10.3379 6.75Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Go Back Button */}
      <button
        onClick={onBack}
        className="absolute left-[23px] top-[53px] w-[21px] h-[16px] cursor-pointer hover:opacity-70 transition"
      >
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00540592 10.4835C0.00436357 10.1337 0.190267 9.7946 0.530848 9.52521L11.9535 0.540932C12.3413 0.235142 12.8985 0.0428417 13.5026 0.00633605C14.1067 -0.0301696 14.7082 0.0921093 15.1747 0.346272C15.6412 0.600435 15.9346 0.965663 15.9903 1.36161C16.046 1.75756 15.8595 2.15179 15.4717 2.45758L5.23699 10.4835L15.1062 18.5095C15.2959 18.6626 15.4377 18.8389 15.5232 19.0281C15.6087 19.2172 15.6363 19.4156 15.6045 19.6118C15.5726 19.808 15.4819 19.9982 15.3376 20.1713C15.1933 20.3445 14.9982 20.4972 14.7635 20.6208C14.5286 20.7579 14.253 20.8618 13.954 20.9259C13.655 20.9899 13.3391 21.0128 13.026 20.9932C12.7128 20.9735 12.4093 20.9116 12.1343 20.8115C11.8594 20.7113 11.6189 20.575 11.4281 20.4112L0.393776 11.4269C0.107031 11.1497 -0.0297093 10.8176 0.00540592 10.4835Z"
            fill="#1E1E1E"
            fillOpacity="0.79"
          />
        </svg>
      </button>

      {/* ChainPlate Title */}
      <div className="absolute left-[5px] top-[71px] w-[350px] h-[80px]">
        <h1
          className="text-black text-center text-[64px] font-normal tracking-[-0.24px] leading-normal"
          style={{
            fontFamily: "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          ChainPlate
        </h1>
      </div>

      {/* Consumer/Producer Toggle */}
      <div className="absolute left-[67px] top-[170px] w-[214px] h-[32px]">
        <button
          onClick={() => setIsConsumer(true)}
          className={`absolute left-0 top-0 w-[108px] h-[32px] rounded-[10px] border-2 flex items-center justify-center transition ${
            isConsumer
              ? "border-[#45ADA1] bg-[#45ADA1]"
              : "border-[#D9D9D9] bg-white"
          }`}
        >
          <span
            className={`text-center text-[18px] font-normal tracking-[-0.24px] ${
              isConsumer ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Consumer
          </span>
        </button>
        <button
          onClick={() => setIsConsumer(false)}
          className={`absolute left-[98px] top-0 w-[116px] h-[32px] rounded-[10px] border-2 flex items-center justify-center transition ${
            !isConsumer
              ? "border-[#45ADA1] bg-[#45ADA1]"
              : "border-[#D9D9D9] bg-white"
          }`}
        >
          <span
            className={`text-center text-[18px] font-normal tracking-[-0.24px] ${
              !isConsumer ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Producer
          </span>
        </button>
      </div>

      {/* Username Field */}
      <div className="absolute left-[20px] top-[226px] w-[298px] h-[64px]">
        <label
          className="absolute left-0 top-0 text-black text-center text-[12px] font-medium tracking-[-0.24px]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="ex: Your Name"
          className="absolute left-[22px] top-[21px] w-[276px] h-[43px] rounded-[10px] bg-[#E8E8E8] px-[11px] text-black text-[16px] font-medium tracking-[-0.24px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        />
      </div>

      {/* E-mail Field */}
      <div className="absolute left-[10px] top-[301px] w-[307px] h-[61px]">
        <label
          className="absolute left-0 top-0 text-black text-center text-[12px] font-medium tracking-[-0.24px]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="ex: yourName@ist.com"
          className="absolute left-[31px] top-[18px] w-[276px] h-[43px] rounded-[10px] bg-[#E8E8E8] px-[11px] text-black text-[16px] font-medium tracking-[-0.24px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        />
      </div>

      {/* Password Field */}
      <div className="absolute left-[19px] top-[377px] w-[298px] h-[61px]">
        <label
          className="absolute left-0 top-0 text-black text-center text-[12px] font-medium tracking-[-0.24px]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="ex: abc123"
          className="absolute left-[22px] top-[18px] w-[276px] h-[43px] rounded-[10px] bg-[#E8E8E8] px-[11px] text-black text-[16px] font-medium tracking-[-0.24px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        />
      </div>

      {/* Confirm Password Field */}
      <div className="absolute left-[23px] top-[454px] w-[295px] h-[61px]">
        <label
          className="absolute left-0 top-0 text-black text-center text-[12px] font-medium tracking-[-0.24px]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder=""
          className="absolute left-[19px] top-[18px] w-[276px] h-[43px] rounded-[10px] bg-[#E8E8E8] px-[11px] text-black text-[16px] font-medium tracking-[-0.24px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          style={{
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        />
      </div>

      {/* Register Button */}
      <div className="absolute left-[105px] top-[536px] w-[150px] h-[36px]">
        <button
          onClick={handleRegister}
          className="w-full h-full rounded-[10px] border-[0.6px] border-[rgba(69,173,161,0.45)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer transition hover:opacity-90 bg-[#45ADA1]"
        >
          <span
            className="text-white text-[18px] font-medium leading-normal"
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

      {/* Already have an account? Login here! */}
      <div className="absolute left-[103px] top-[584px] w-[150px] h-[34px]">
        <button
          onClick={onLoginClick}
          className="text-black text-center text-[11px] font-medium leading-normal cursor-pointer hover:underline"
          style={{
            fontFamily: "Outfit, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 500,
          }}
        >
          Already have an account? Login here!
        </button>
      </div>
    </div>
  );
};

export default RegisterConsumer;

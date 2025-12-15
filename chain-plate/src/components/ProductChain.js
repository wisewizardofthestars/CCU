import React, { useState, useEffect } from "react";
import ProductChainStep2 from "./ProductChainStep2";
import ProductChainStep3 from "./ProductChainStep3";

function ProductChain({ onBack, product }) {
  const [producer, setProducer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [hasCompletedChain, setHasCompletedChain] = useState(false);
  const totalSteps = 3;

  useEffect(() => {
    const fetchProducer = async () => {
      if (product.producerId) {
        try {
          const response = await fetch(
            `http://localhost:3001/producers/${product.producerId}`
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

  const awardChainies = async () => {
    if (hasCompletedChain) return; // Only award once

    try {
      const currentUserId = localStorage.getItem("currentUserId");
      const userId = localStorage.getItem("userId");
      const consumerId = localStorage.getItem("consumerId");
      const id = currentUserId || userId || consumerId;

      console.log("Looking for user ID:", {
        currentUserId,
        userId,
        consumerId,
        id,
      });

      if (!id) {
        console.error("No user ID found in localStorage");
        // Show popup anyway for the user experience
        setHasCompletedChain(true);
        setShowRewardPopup(true);
        return;
      }

      // Fetch current user data
      const userResponse = await fetch(`http://localhost:3001/users/${id}`);
      const userData = await userResponse.json();

      // Update user with new chainies count
      const currentChainies = userData.chainies || 0;
      const newChainies = currentChainies + 100;

      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chainies: newChainies,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Chainies awarded successfully! New total:", newChainies);
        setHasCompletedChain(true);
        setShowRewardPopup(true);
      } else {
        console.error("Failed to award chainies:", response.status);
        // Still show popup
        setHasCompletedChain(true);
        setShowRewardPopup(true);
      }
    } catch (error) {
      console.error("Error awarding chainies:", error);
      // Still show popup
      setHasCompletedChain(true);
      setShowRewardPopup(true);
    }
  };

  useEffect(() => {
    if (currentStep === 2 && !hasCompletedChain) {
      // User reached the last step - trigger popup after a short delay
      const timer = setTimeout(() => {
        awardChainies();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Generate chain steps based on product data
  const chainSteps = [
    {
      id: 1,
      title: "Cultivation",
      description: `Grown at ${producer?.name || "our farm"}`,
      location: producer?.location || "Farm Location",
      date: product.harvestDate || "Recent harvest",
      icon: "🌱",
      color: "#86EFAC",
    },
    {
      id: 2,
      title: "Harvesting",
      description: "Hand-picked at peak ripeness",
      location: producer?.name || "Farm",
      date: product.harvestDate || "Fresh harvest",
      icon: "🧺",
      color: "#FDE047",
    },
    {
      id: 3,
      title: "Quality Check",
      description: "Certified organic inspection",
      location: "Quality Control",
      date: product.certificationDate || "Certified",
      icon: "✓",
      color: "#60A5FA",
    },
    {
      id: 4,
      title: "Packaging",
      description: "Eco-friendly sustainable packaging",
      location: "Packing Facility",
      date: product.packagingDate || "Ready for delivery",
      icon: "📦",
      color: "#C084FC",
    },
    {
      id: 5,
      title: "Distribution",
      description: "Delivered fresh to your location",
      location: "Local Market",
      date: new Date().toLocaleDateString(),
      icon: "🚚",
      color: "#45ADA1",
    },
  ];

  if (loading) {
    return (
      <div className="w-full max-w-[360px] mx-auto h-screen bg-gradient-to-b from-[#C5F1ED] to-white flex items-center justify-center">
        <div className="text-[#45ADA1] font-outfit text-[18px] font-semibold">
          Loading chain...
        </div>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <ProductChainStep2
        onBack={onBack}
        onNext={() => setCurrentStep(2)}
        onPrevious={() => setCurrentStep(0)}
        product={product}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <>
        <ProductChainStep3
          onBack={onBack}
          onPrevious={() => setCurrentStep(1)}
        />

        {/* Reward Popup */}
        {showRewardPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[20px] p-8 max-w-[300px] mx-4 text-center shadow-2xl">
              <div className="text-[60px] mb-4">🎉</div>
              <h2 className="font-outfit text-[28px] font-bold text-[#45ADA1] mb-2">
                Congratulations!
              </h2>
              <p className="font-outfit text-[18px] text-gray-700 mb-2">
                You completed the product chain!
              </p>
              <div className="font-outfit text-[32px] font-bold text-[#45ADA1] mb-6">
                +100 Chainies
              </div>
              <button
                onClick={() => setShowRewardPopup(false)}
                className="bg-[#45ADA1] text-white font-outfit text-[18px] font-semibold px-8 py-3 rounded-full hover:bg-[#3a9189] transition-colors"
              >
                Awesome!
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="w-full max-w-[360px] mx-auto h-screen bg-gradient-to-b from-[#C5F1ED] via-[#E0F7F4] to-white relative flex flex-col font-outfit overflow-hidden">
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

      {/* Top Bar */}
      <div
        className="w-full h-[50px] bg-[#45ADA1] flex items-center justify-center relative flex-shrink-0"
        style={{ filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))" }}
      >
        <button
          onClick={onBack}
          className="absolute left-[13px] top-1/2 -translate-y-1/2 w-[21px] h-[16px]"
        >
          <svg width="21" height="16" viewBox="0 0 16 21" fill="none">
            <path
              d="M0.00540592 10.4835C0.00436357 10.1337 0.190267 9.7946 0.530848 9.52521L11.9535 0.540932C12.3413 0.235142 12.8985 0.0428417 13.5026 0.00633605C14.1067 -0.0301696 14.7082 0.0921093 15.1747 0.346272C15.6412 0.600435 15.9346 0.965663 15.9903 1.36161C16.046 1.75756 15.8595 2.15179 15.4717 2.45758L5.23699 10.4835L15.1062 18.5095C15.2959 18.6626 15.4377 18.8389 15.5232 19.0281C15.6087 19.2172 15.6363 19.4156 15.6045 19.6118C15.5726 19.808 15.4819 19.9982 15.3376 20.1713C15.1933 20.3445 14.9982 20.4972 14.7635 20.6208C14.5286 20.7579 14.253 20.8618 13.954 20.9259C13.655 20.9899 13.3391 21.0128 13.026 20.9932C12.7128 20.9735 12.4093 20.9116 12.1343 20.8115C11.8594 20.7113 11.6189 20.575 11.4281 20.4112L0.393776 11.4269C0.107031 11.1497 -0.0297093 10.8176 0.00540592 10.4835Z"
              fill="white"
            />
          </svg>
        </button>
        <h1 className="font-outfit text-[32px] font-medium text-white tracking-[-0.24px]">
          Product Chain
        </h1>
        <div className="absolute right-[13px] top-1/2 -translate-y-1/2 w-[32px] h-[32px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3f8fa29d17b0a18348b3695d08021fa2d1379c1f?width=64"
            alt="Blockchain"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Progress Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[30px] flex items-center gap-[26px] z-10">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className="w-[8px] h-[8px] rounded-full transition-all"
              style={{
                backgroundColor: currentStep === step ? "#45ADA1" : "#D9D9D9",
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="absolute left-[29px] top-[39px] z-10 opacity-56 hover:opacity-100 transition-opacity"
          >
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path
                d="M18 7L11 14.5L18 22"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L5 14.5L12 22"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {currentStep < totalSteps - 1 && (
          <button
            onClick={handleNextStep}
            className="absolute right-[29px] top-[39px] z-10 opacity-56 hover:opacity-100 transition-opacity"
          >
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path
                d="M11 7L18 14.5L11 22"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 7L24 14.5L17 22"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Producer Card */}
        <div
          className="absolute left-[10px] top-[90px] w-[300px] h-[70px] border-2 border-black  flex items-center px-3 gap-3"
          style={{ zIndex: 5 }}
        >
          <div className="relative w-[54px] h-[54px] flex-shrink-0">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
              <circle
                cx="27"
                cy="27"
                r="24"
                fill="white"
                stroke="black"
                strokeWidth="6"
              />
              <circle cx="27" cy="23" r="7" fill="black" />
              <path
                d="M42 45C42 52 27 54 27 54C27 54 12 53.75 12 46.5C12 39.25 15 33 27 33C38 33 42 38 42 45Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-outfit text-[22px] font-semibold text-black tracking-[-0.24px] leading-tight">
              {producer?.name || "Farm Name"}
            </div>
            <div className="font-outfit text-[18px] font-light text-black tracking-[-0.24px] leading-tight">
              {producer?.owner || "Owner"}
            </div>
          </div>
        </div>

        {/* Vertical Line from Producer Card */}
        <div
          className="absolute left-[160px] top-[160px] w-[2px] bg-black"
          style={{ height: "230px", zIndex: 5 }}
        />

        {/* Farm Scene at Bottom - Using Local Images */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[250px]"
          style={{ zIndex: 1 }}
        >
          <img
            src={require("./images/step1/image.png")}
            alt="Farm scene"
            className="absolute bottom-0 left-0 w-full h-full object-cover"
          />

          {/* Blueberry Character */}
          <img
            src={require("./images/step1/image1.png")}
            alt="Blueberry"
            className="absolute left-[29px] bottom-[65px] w-[105px] h-[95px] z-20"
          />

          {/* Farm Image */}
          <img
            src={require("./images/step1/image2.png")}
            alt="Farm"
            className="absolute right-[-20px] bottom-[15px] w-[250px] h-[320px] z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductChain;

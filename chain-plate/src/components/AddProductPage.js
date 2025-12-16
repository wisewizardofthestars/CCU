import React, { useState } from "react";

const API_URL = "http://localhost:3001";

function AddProductPage({ onBack, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    tags: [],
    description: "",
    price: "",
    distance: "",
    certifications: [],
  });
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const availableTags = [
    "Organic",
    "Bio",
    "Fresh",
    "Local",
    "Sustainable",
    "Fair Trade",
  ];

  const handleToggleTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.price) {
      alert("Please fill in at least Product Name and Price");
      return;
    }

    try {
      const userId = localStorage.getItem("currentUserId");
      const userRes = await fetch(`${API_URL}/users/${userId}`);
      const userData = await userRes.json();

      const newProduct = {
        name: formData.name,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
        price: formData.price.includes("€")
          ? formData.price
          : `${formData.price}€`,
        tags: formData.tags.length > 0 ? formData.tags : ["Fresh"],
        distance: formData.distance.includes("km")
          ? formData.distance
          : `${formData.distance} km`,
        producerId: parseInt(userData.producerId),
        description: formData.description,
        certifications: formData.certifications,
      };

      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const createdProduct = await response.json();
        setShowSuccessModal(true);
        if (onProductAdded) {
          onProductAdded(createdProduct);
        }
        // Close modal and go back after 1.5 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
          if (onBack) {
            onBack();
          }
        }, 1500);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
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
              d="M1.98399 4.40901C2.37174 3.98705 2.89763 3.75 3.44599 3.75H11.7163C12.2646 3.75 12.7905 3.98705 13.1782 4.40901C13.566 4.83097 13.7838 5.40326 13.7838 6V6.12868C14.0718 6.2395 14.3365 6.41946 14.5566 6.65901C14.9444 7.08097 15.1622 7.65326 15.1622 8.25V9.75C15.1622 10.3467 14.9444 10.919 14.5566 11.341C14.3365 11.5805 14.0718 11.7605 13.7838 11.8713V12C13.7838 12.5967 13.566 13.169 13.1782 13.591C12.7905 14.0129 12.2646 14.25 11.7163 14.25H3.44599C2.89763 14.25 2.37174 14.0129 1.98399 13.591C1.59625 13.169 1.37842 12.5967 1.37842 12V6C1.37842 5.40326 1.59625 4.83097 1.98399 4.40901ZM3.44599 5.25C3.2632 5.25 3.0879 5.32902 2.95866 5.46967C2.82941 5.61032 2.7568 5.80109 2.7568 6V12C2.7568 12.1989 2.82941 12.3897 2.95866 12.5303C3.0879 12.671 3.2632 12.75 3.44599 12.75H11.7163C11.899 12.75 12.0743 12.671 12.2036 12.5303C12.3328 12.3897 12.4054 12.1989 12.4054 12V11.25C12.4054 10.8358 12.714 10.5 13.0946 10.5C13.2774 10.5 13.4527 10.421 13.582 10.2803C13.7112 10.1397 13.7838 9.94891 13.7838 9.75V8.25C13.7838 8.05109 13.7112 7.86032 13.582 7.71967C13.4527 7.57902 13.2774 7.5 13.0946 7.5C12.714 7.5 12.4054 7.16421 12.4054 6.75V6C12.4054 5.80109 12.3328 5.61032 12.2036 5.46967C12.0743 5.32902 11.899 5.25 11.7163 5.25H3.44599ZM4.82436 6.75C5.20499 6.75 5.51355 7.08579 5.51355 7.5V10.5C5.51355 10.9142 5.20499 11.25 4.82436 11.25C4.44374 11.25 4.13517 10.9142 4.13517 10.5V7.5C4.13517 7.08579 4.44374 6.75 4.82436 6.75ZM7.58112 6.75C7.96175 6.75 8.27031 7.08579 8.27031 7.5V10.5C8.27031 10.9142 7.96175 11.25 7.58112 11.25C7.20049 11.25 6.89193 10.9142 6.89193 10.5V7.5C6.89193 7.08579 7.20049 6.75 7.58112 6.75ZM10.3379 6.75C10.7185 6.75 11.0271 7.08579 11.0271 7.5V10.5C11.0271 10.9142 10.7185 11.25 10.3379 11.25C9.95725 11.25 9.64869 10.9142 9.64869 10.5V7.5C9.64869 7.08579 9.95725 6.75 10.3379 6.75Z"
              fill="#222227"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="relative w-full h-[60px] bg-gradient-to-r from-[#45ADA1] to-[#3d9a8f] flex items-center px-4 flex-shrink-0">
        <button onClick={onBack} className="mr-4 hover:opacity-70 transition">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-white text-[24px] font-bold">New Product</h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {/* Image Upload Section */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-[110px] h-[110px] bg-gray-200 rounded-[15px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition">
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="Product preview"
                  className="w-full h-full object-cover rounded-[15px]"
                />
              ) : (
                <>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                      stroke="#666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                      stroke="#666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </div>
            <p className="text-[14px] text-gray-700 mt-2 font-medium">
              Add a picture
            </p>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <label className="text-[16px] font-bold text-gray-800 mb-2 block">
                Product Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter product name"
                className="w-full h-[45px] bg-gray-200 rounded-[10px] px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
              />
            </div>

            <div>
              <label className="text-[14px] font-bold text-gray-800 mb-2 block">
                Tags:
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowTagDropdown(!showTagDropdown)}
                  className="w-full h-[40px] bg-[#45ADA1] rounded-[10px] px-4 text-white text-[14px] font-medium flex items-center justify-between hover:bg-[#3d9a8f] transition"
                >
                  <span>Add tags</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {showTagDropdown && (
                  <div className="absolute top-full mt-2 w-full bg-white border-2 border-gray-200 rounded-[10px] shadow-lg z-10 p-2">
                    {availableTags.map((tag) => (
                      <label
                        key={tag}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.tags.includes(tag)}
                          onChange={() => handleToggleTag(tag)}
                          className="w-4 h-4"
                        />
                        <span className="text-[14px]">{tag}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#45ADA1] text-white text-[12px] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div>
          <label className="text-[18px] font-bold text-gray-800 mb-2 block">
            Product Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Describe your product..."
            className="w-full h-[100px] bg-gray-200 rounded-[15px] p-4 text-[14px] resize-none focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          />
        </div>

        {/* Price and Distance */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[14px] font-bold text-gray-800 mb-2 block">
              Price *
            </label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="e.g., 2.5€"
              className="w-full h-[45px] bg-gray-200 rounded-[10px] px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
            />
          </div>
          <div>
            <label className="text-[14px] font-bold text-gray-800 mb-2 block">
              Distance
            </label>
            <input
              type="text"
              value={formData.distance}
              onChange={(e) =>
                setFormData({ ...formData, distance: e.target.value })
              }
              placeholder="e.g., 1.2 km"
              className="w-full h-[45px] bg-gray-200 rounded-[10px] px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="text-[14px] font-bold text-gray-800 mb-2 block">
            Image URL
          </label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            placeholder="https://example.com/image.jpg"
            className="w-full h-[45px] bg-gray-200 rounded-[10px] px-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#45ADA1]"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 h-[45px] bg-[#45ADA1] text-white rounded-[15px] font-medium hover:bg-[#3d9a8f] transition">
            Add a text entry
          </button>
          <button className="flex-1 h-[45px] bg-[#45ADA1] text-white rounded-[15px] font-medium hover:bg-[#3d9a8f] transition">
            Add certifications
          </button>
        </div>

        {/* Verify Information */}
        <button className="w-full h-[50px] bg-[#45ADA1] text-white rounded-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#3d9a8f] transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12M12 8H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Verify information
        </button>

        {/* Done Button */}
        <div className="flex justify-end pb-4">
          <button
            onClick={handleSubmit}
            className="w-[140px] h-[50px] bg-[#45ADA1] text-white rounded-[25px] font-bold text-[18px] hover:bg-[#3d9a8f] transition shadow-lg"
          >
            Done
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-[20px] p-8 mx-4 max-w-[300px] w-full shadow-2xl animate-scale-in">
            <div className="flex flex-col items-center">
              {/* Success Icon */}
              <div className="w-[80px] h-[80px] bg-[#45ADA1] rounded-full flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13L9 17L19 7"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/* Success Message */}
              <h3 className="text-[22px] font-bold text-gray-800 mb-2">
                Success!
              </h3>
              <p className="text-[16px] text-gray-600 text-center">
                Product added successfully
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProductPage;

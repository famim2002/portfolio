import React, { useState } from "react";
import BrandButton from "../../common-components/BrandButton";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear individual error as user types
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim() === "") newErrors.name = "Full name is required.";
    if (formData.email.trim() === "") newErrors.email = "Email is required.";
    if (formData.phone.trim() === "") newErrors.phone = "Phone is required.";
    if (formData.address.trim() === "")
      newErrors.address = "Address is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      // Optional: clear form
      setFormData({ name: "", email: "", phone: "", address: "" });
    }
  };

  const inputClass = (field) =>
    `w-full text-white text-2xl md:text-3xl p-2 font-regularFont outline-none border-b-2 transition duration-300 mt-4 ${
      errors[field]
        ? "bg-red-600 border-red-600 placeholder-white"
        : "bg-[#212121c9] border-transparent focus:border-white"
    }`;

  return (
    <div className="p-3 sm:p-5 md:p-10 h-auto w-full max-w-[900px] rounded-[30px] mx-auto bg-[#21212193]">
      <div className="h-full w-full">
        <h3 className="text-4xl md:text-6xl font-headerFont text-white underline decoration-red-700">
          let's do business together.
        </h3>
        <form onSubmit={handleSubmit} className="pt-5">
          <div className="border-t-2 border-white pt-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={errors.name ? errors.name : "Full Name"}
                className={inputClass("name")}
                autoComplete="off"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={errors.email ? errors.email : "Email Address"}
                className={inputClass("email")}
                autoComplete="off"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={errors.phone ? errors.phone : "Phone Number"}
                className={inputClass("phone")}
                autoComplete="off"
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={
                  errors.address ? errors.address : "Present Address"
                }
                className={inputClass("address")}
                autoComplete="off"
              />
            </div>

            <div className="mt-6">
              <BrandButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;

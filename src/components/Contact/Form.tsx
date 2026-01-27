"use client";

import { useState } from "react";
import Button from "../Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  services: string[];
  timeline: string;
  source: string;
  message: string;
}

const servicesList = [
  "E-book Writing",
  "Content/Copy Writing (Website, Blogs)",
  "Editing & Cover Design",
  "Formatting & Proofreading",
  "SEO & Publishing",
  "Book Marketing/Promotion",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
    services: [],
    timeline: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // yahan API call kar sakte ho
  };

  return (
    <div className="bg-[url('/why-aero-gradient-bg.png')] bg-contain bg-no-repeat bg-left">
      <img src="/carousel-bg.png" className="absolute right-0" alt="" />
      <form
        onSubmit={handleSubmit}
        className="max-w-[1140px] mx-auto bg-white p-8 rounded-xl shadow"
      >
        <h2 className="text-5xl font-syne font-bold text-brand-primary text-center mb-8">
          Let Us Help You Out!
        </h2>

        {/* Name */}
        <label className="block mb-4">
          <span className="text-sm font-medium">What is your name?</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-sm font-medium">
            What’s the best email to reach you?
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
          />
        </label>

        {/* Phone */}
        <label className="block mb-4">
          <span className="text-sm font-medium">
            Do you prefer phone?
          </span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
          />
        </label>

        {/* Website */}
        <label className="block mb-6">
          <span className="text-sm font-medium">
            If you have an existing website, what’s the link?
          </span>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
          />
        </label>

        {/* Services + Timeline */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-medium mb-2">
              What are you reaching out for?
            </p>
            {servicesList.map((service) => (
              <label key={service} className="flex items-center mb-2 text-sm">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                  className="mr-2"
                />
                {service}
              </label>
            ))}
          </div>

          <div>
            <p className="font-medium mb-2">
              When are you looking to get this done?
            </p>
            {["ASAP", "Within next couple weeks", "Within next 1–2 months", "Flexible"].map(
              (time) => (
                <label key={time} className="flex items-center mb-2 text-sm">
                  <input
                    type="radio"
                    name="timeline"
                    value={time}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {time}
                </label>
              )
            )}
          </div>
        </div>

        {/* Source */}
        <label className="block mb-4">
          <span className="text-sm font-medium">
            What did you type into Google to find us?
          </span>
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="mt-1 w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
          />
        </label>

        {/* Message */}
        <label className="block mb-6">
          <span className="text-sm font-medium">Extra thoughts?</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full h-32 px-6 py-4 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all resize-none font-poppins"
          />
        </label>

        <Button className="mx-auto px-12">
          Submit
        </Button>
      </form>
    </div>
  );
}

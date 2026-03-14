"use client";

import { useState } from "react";

export default function Contact() {
  // Contact details (fill in your info)
  const contactDetails = {
    email: "musharibayub@gmail.com",
    phone: "+92-300-7709253",
    linkedIn: "https://www.linkedin.com/in/musharib-ayub/",
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit action
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      {/* Contact Form */}
      <div className="bg-yellow-50 shadow-md rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Message</span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="mt-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none h-32"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-brown-500 text-white py-2 px-4 rounded hover:bg-brown-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="bg-yellow-50 shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">My Contact Details</h2>
        <p>
          <strong>Email:</strong> {contactDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {contactDetails.phone}
        </p>
        <p>
          <strong>LinkedIn:</strong><a href={contactDetails.linkedIn} target="_blank"> {contactDetails.linkedIn}</a> 
        </p>
      </div>
    </div>
  );
}
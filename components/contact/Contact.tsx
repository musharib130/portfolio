"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  // Contact details (fill in your info)
  const contactDetails = [
    {
      icon: <MdEmail className="h-10 w-10" />, 
      value: "mailto:musharibayub@gmail.com"
    },
    {
      icon: <FaWhatsapp className="h-10 w-10" />, 
      value: "https://wa.me/923007709253?text=Hi%20Musharib%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
    },
    {
      icon: <FaLinkedin className="h-10 w-10" />, 
      value: "https://www.linkedin.com/in/musharib-ayub/"
    },
    {
      icon: <FaGithub className="h-10 w-10" />, 
      value: "https://github.com/musharib130"
    }
  ];

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
    <div 
      style={{ paddingTop: '32px' }}
      className="h-full w-full flex flex-col items-center justify-start gap-8">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      
      {/* Contact Details */}
      <div 
        style={{
          maxWidth: '100%'
        }}
        className="flex flex-row justify-center align-center gap-8 bg-yellow-50 shadow-md rounded-lg p-6 w-2xl">
        {
          contactDetails.map((detail, index) => (
            <a key={index} href={detail.value} target="_blank" rel="noopener noreferrer" className="flex items-center">
              {detail.icon}
            </a>
          ))
        }

      </div>

      {/* Contact Form */}
      {/* Hidden for now */}
      {/* <div 
        style={{
          maxWidth: '100%'
        }}
        className="bg-yellow-50 shadow-md rounded-lg p-6 mb-8 w-2xl grow shrink overflow-auto">
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
      </div> */}

    </div>
  );
}
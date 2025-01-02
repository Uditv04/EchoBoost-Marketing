import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center text-white [background:radial-gradient(105%_200%_at_50%_10%,#000_40%,#63e_100%)]">
      <a href="/" className="text-blue-600 animate-pulse">
        Back To Home
      </a>
      <h1 className="text-3xl sm:text-4xl font-bold mt-4">
        We'd love to hear from you
      </h1>
      <p className="mt-2 text-sm sm:text-base">
        Have questions or feedback? Simply use the form below to contact us, and we'll get back to you as soon as
        possible.
      </p>
      <h3 className="text-3xl sm:text-5xl font-semibold mt-6">Contact Us</h3>
      <form action="mail.php" method="POST" className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="contactName"
            className="w-full sm:w-[600px] bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,11,128,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="contactEmail"
            className="w-full sm:w-[600px] bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,11,128,0.9)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-medium">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="contactSubject"
            className="w-full sm:w-[600px] bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,11,128,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Message:
          </label>
          <textarea
            name="message"
            cols="20"
            rows="10"
            className="w-full sm:w-[600px] bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,11,128,0.9)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
          ></textarea>
        </div>
        <div>
          <button className="bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,11,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500 px-6 py-2 rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
